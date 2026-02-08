/**
 * Google Trends Integration
 *
 * This module fetches trending search terms related to Vietnam business and investment.
 * It helps identify what people are actively searching for.
 */

const googleTrends = require('google-trends-api');
const fs = require('fs').promises;
const path = require('path');

const KEYWORDS = [
  'vietnam business',
  'invest vietnam',
  'start company vietnam',
  'vietnam visa',
  'work permit vietnam',
  'vietnam tax',
  'vietnam manufacturing',
  'vietnam real estate',
  'vietnam startup',
  'vietnam legal services'
];

class GoogleTrendsAnalyzer {
  constructor() {
    this.trendingTopics = [];
    this.relatedQueries = [];
  }

  async getInterestOverTime(keyword) {
    try {
      console.log(`Fetching trends for: ${keyword}`);

      const result = await googleTrends.interestOverTime({
        keyword: keyword,
        startTime: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000), // Last 90 days
        geo: 'VN', // Vietnam
      });

      return JSON.parse(result);
    } catch (error) {
      console.error(`Error fetching trends for ${keyword}:`, error.message);
      return null;
    }
  }

  async getRelatedQueries(keyword) {
    try {
      console.log(`Fetching related queries for: ${keyword}`);

      const result = await googleTrends.relatedQueries({
        keyword: keyword,
        startTime: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Last 30 days
        geo: 'VN',
      });

      const data = JSON.parse(result);

      if (data.default && data.default.rankedList) {
        const topQueries = data.default.rankedList[0]?.rankedKeyword || [];
        const risingQueries = data.default.rankedList[1]?.rankedKeyword || [];

        return {
          top: topQueries.map(q => ({ query: q.query, value: q.value })),
          rising: risingQueries.map(q => ({ query: q.query, value: q.value }))
        };
      }

      return { top: [], rising: [] };
    } catch (error) {
      console.error(`Error fetching related queries for ${keyword}:`, error.message);
      return { top: [], rising: [] };
    }
  }

  async analyzeAll() {
    console.log('Starting Google Trends analysis...\n');

    for (const keyword of KEYWORDS) {
      // Get interest over time
      const interest = await this.getInterestOverTime(keyword);

      if (interest && interest.default && interest.default.timelineData) {
        const avgInterest = this.calculateAverageInterest(interest.default.timelineData);

        this.trendingTopics.push({
          keyword: keyword,
          averageInterest: avgInterest,
          latestData: interest.default.timelineData[interest.default.timelineData.length - 1]
        });
      }

      // Get related queries
      const related = await this.getRelatedQueries(keyword);

      if (related.top.length > 0 || related.rising.length > 0) {
        this.relatedQueries.push({
          keyword: keyword,
          topQueries: related.top.slice(0, 10),
          risingQueries: related.rising.slice(0, 10)
        });
      }

      // Rate limiting
      await this.delay(2000);
    }

    console.log(`\nAnalyzed ${this.trendingTopics.length} keywords`);
    console.log(`Found related queries for ${this.relatedQueries.length} keywords`);

    return {
      trending: this.trendingTopics,
      related: this.relatedQueries
    };
  }

  calculateAverageInterest(timelineData) {
    if (!timelineData || timelineData.length === 0) return 0;

    const sum = timelineData.reduce((acc, point) => {
      return acc + (point.value[0] || 0);
    }, 0);

    return Math.round(sum / timelineData.length);
  }

  async saveToFile() {
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = path.join(__dirname, '../data', `google-trends-${timestamp}.json`);

    const data = {
      trending: this.trendingTopics,
      related: this.relatedQueries,
      generated_at: new Date().toISOString()
    };

    await fs.mkdir(path.dirname(filename), { recursive: true });
    await fs.writeFile(filename, JSON.stringify(data, null, 2));

    console.log(`Saved Google Trends data to ${filename}`);
    return filename;
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Export for use in other modules
module.exports = GoogleTrendsAnalyzer;

// Run standalone if executed directly
if (require.main === module) {
  (async () => {
    const analyzer = new GoogleTrendsAnalyzer();
    await analyzer.analyzeAll();
    await analyzer.saveToFile();
  })();
}
