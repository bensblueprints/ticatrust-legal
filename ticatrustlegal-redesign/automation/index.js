/**
 * Main Automation Orchestrator
 *
 * This script coordinates all automation tasks:
 * 1. Scrapes Reddit and Quora for Vietnam business questions
 * 2. Analyzes Google Trends for popular search terms
 * 3. Consolidates all data into a spreadsheet
 * 4. Sends Slack notification with results
 *
 * Run daily via cron job or n8n workflow
 */

const RedditScraper = require('./scrapers/reddit-scraper');
const QuoraScraper = require('./scrapers/quora-scraper');
const GoogleTrendsAnalyzer = require('./utils/google-trends');
const SlackNotifier = require('./utils/slack-notifier');
const fs = require('fs').promises;
const path = require('path');

class ContentAutomation {
  constructor() {
    this.redditScraper = new RedditScraper();
    this.quoraScraper = new QuoraScraper();
    this.trendsAnalyzer = new GoogleTrendsAnalyzer();
    this.slackNotifier = new SlackNotifier();

    this.allQuestions = [];
    this.trends = null;
  }

  async run() {
    console.log('🚀 Starting Content Automation System');
    console.log('=====================================\n');

    const startTime = Date.now();

    try {
      // Step 1: Scrape Reddit
      console.log('📱 Step 1: Scraping Reddit...');
      const redditQuestions = await this.redditScraper.scrapeAll();
      await this.redditScraper.saveToFile();
      console.log(`✅ Found ${redditQuestions.length} Reddit questions\n`);

      // Step 2: Scrape Quora
      console.log('💭 Step 2: Scraping Quora...');
      const quoraQuestions = await this.quoraScraper.scrapeAll();
      await this.quoraScraper.saveToFile();
      console.log(`✅ Found ${quoraQuestions.length} Quora questions\n`);

      // Step 3: Analyze Google Trends
      console.log('📊 Step 3: Analyzing Google Trends...');
      this.trends = await this.trendsAnalyzer.analyzeAll();
      await this.trendsAnalyzer.saveToFile();
      console.log(`✅ Analyzed ${this.trends.trending.length} trending topics\n`);

      // Step 4: Consolidate all questions
      this.allQuestions = [...redditQuestions, ...quoraQuestions];

      // Add trend-based questions
      for (const trendData of this.trends.related) {
        for (const query of trendData.topQueries.slice(0, 5)) {
          this.allQuestions.push({
            title: query.query,
            source: 'google_trends',
            value: query.value,
            keyword: trendData.keyword
          });
        }
      }

      // Step 5: Score and prioritize questions
      console.log('🎯 Step 4: Scoring and prioritizing questions...');
      this.scoreQuestions();
      this.allQuestions.sort((a, b) => b.priority_score - a.priority_score);
      console.log(`✅ Prioritized ${this.allQuestions.length} total questions\n`);

      // Step 6: Save consolidated data
      console.log('💾 Step 5: Saving consolidated data...');
      const consolidatedFile = await this.saveConsolidatedData();
      console.log(`✅ Saved to ${consolidatedFile}\n`);

      // Step 7: Generate CSV for spreadsheet import
      console.log('📄 Step 6: Generating CSV for spreadsheet...');
      const csvFile = await this.generateCSV();
      console.log(`✅ Generated CSV: ${csvFile}\n`);

      // Step 8: Send Slack notification
      console.log('📧 Step 7: Sending Slack notification...');
      await this.sendSlackNotification();
      console.log('✅ Notification sent\n');

      const duration = ((Date.now() - startTime) / 1000).toFixed(2);
      console.log('=====================================');
      console.log(`✅ Automation Complete! (${duration}s)`);
      console.log('=====================================\n');

      return {
        success: true,
        stats: this.getStats(),
        files: {
          consolidated: consolidatedFile,
          csv: csvFile
        }
      };

    } catch (error) {
      console.error('❌ Error in automation:', error);

      // Notify error to Slack
      await this.slackNotifier.notifyError(error);

      return {
        success: false,
        error: error.message
      };
    }
  }

  scoreQuestions() {
    for (const q of this.allQuestions) {
      let score = 0;

      // Reddit score
      if (q.source === 'reddit') {
        score += Math.min(q.score || 0, 100); // Cap at 100
        score += Math.min((q.num_comments || 0) * 2, 50); // Comments worth 2x, cap at 50
      }

      // Source priority
      if (q.source === 'reddit') score += 30;
      if (q.source === 'quora') score += 25;
      if (q.source === 'google_trends') score += q.value || 20;

      // Keyword relevance
      const keywords = [
        'business', 'company', 'invest', 'legal', 'vietnam',
        'visa', 'work permit', 'trc', 'tax', 'license'
      ];

      const titleLower = q.title.toLowerCase();
      for (const keyword of keywords) {
        if (titleLower.includes(keyword)) score += 5;
      }

      // Question format bonus
      if (q.title.includes('?')) score += 10;
      if (/\b(how|what|when|where|why)\b/i.test(q.title)) score += 15;

      q.priority_score = Math.round(score);
    }
  }

  async saveConsolidatedData() {
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = path.join(__dirname, 'data', `consolidated-${timestamp}.json`);

    const data = {
      generated_at: new Date().toISOString(),
      stats: this.getStats(),
      questions: this.allQuestions,
      trends: this.trends
    };

    await fs.mkdir(path.dirname(filename), { recursive: true });
    await fs.writeFile(filename, JSON.stringify(data, null, 2));

    return filename;
  }

  async generateCSV() {
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = path.join(__dirname, 'data', `blog-opportunities-${timestamp}.csv`);

    // CSV Header
    let csv = 'Priority Score,Title,Source,URL,Comments/Score,Query/Keyword,Suggested Blog Title\n';

    // Add top 50 questions
    const top50 = this.allQuestions.slice(0, 50);

    for (const q of top50) {
      const title = q.title.replace(/"/g, '""'); // Escape quotes
      const url = q.url || '';
      const score = q.score || q.num_comments || q.value || '';
      const query = q.query || q.keyword || '';
      const blogTitle = this.generateBlogTitle(q.title);

      csv += `${q.priority_score},"${title}",${q.source},"${url}",${score},"${query}","${blogTitle}"\n`;
    }

    await fs.mkdir(path.dirname(filename), { recursive: true });
    await fs.writeFile(filename, csv);

    return filename;
  }

  generateBlogTitle(question) {
    // Remove question marks and convert to title case
    let title = question.replace(/\?+$/, '');

    // Convert common question starters to blog titles
    title = title.replace(/^how (do|can|to) (i|you) /i, 'How to ');
    title = title.replace(/^what (is|are) /i, '');
    title = title.replace(/^when (should|can) /i, 'When to ');
    title = title.replace(/^where (can|should) /i, 'Where to ');
    title = title.replace(/^why (should|do) /i, 'Why ');

    // Add year if not present
    if (!title.includes('2026') && !title.includes('2025')) {
      title += ': 2026 Guide';
    }

    // Capitalize first letter
    return title.charAt(0).toUpperCase() + title.slice(1);
  }

  async sendSlackNotification() {
    const stats = this.getStats();
    stats.topQuestions = this.allQuestions.slice(0, 5);

    await this.slackNotifier.notifyDailyRun(stats);
  }

  getStats() {
    return {
      reddit: this.allQuestions.filter(q => q.source === 'reddit').length,
      quora: this.allQuestions.filter(q => q.source === 'quora' || q.source === 'quora_fallback').length,
      trends: this.allQuestions.filter(q => q.source === 'google_trends').length,
      total: this.allQuestions.length
    };
  }
}

// Export for use in other modules
module.exports = ContentAutomation;

// Run standalone if executed directly
if (require.main === module) {
  (async () => {
    const automation = new ContentAutomation();
    const result = await automation.run();

    if (!result.success) {
      process.exit(1);
    }
  })();
}
