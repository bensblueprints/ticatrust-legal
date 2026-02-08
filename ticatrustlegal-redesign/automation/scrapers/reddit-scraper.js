/**
 * Reddit Scraper for Vietnam Business Questions
 *
 * This script scrapes Reddit for questions about starting businesses and investing in Vietnam.
 * It searches relevant subreddits and extracts popular questions.
 */

const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

const SUBREDDITS = [
  'vietnam',
  'VietNam',
  'entrepreneur',
  'smallbusiness',
  'startups',
  'investing',
  'expats',
  'digitalnomad'
];

const SEARCH_QUERIES = [
  'start business vietnam',
  'invest vietnam',
  'company vietnam',
  'visa vietnam business',
  'work permit vietnam',
  'legal vietnam business',
  'factory vietnam',
  'manufacturing vietnam',
  'tax vietnam',
  'trc vietnam'
];

class RedditScraper {
  constructor() {
    this.baseUrl = 'https://www.reddit.com';
    this.questions = [];
  }

  async searchSubreddit(subreddit, query) {
    try {
      const url = `${this.baseUrl}/r/${subreddit}/search.json`;
      const params = {
        q: query,
        restrict_sr: 1,
        sort: 'relevance',
        t: 'month',
        limit: 25
      };

      console.log(`Searching r/${subreddit} for: ${query}`);

      const response = await axios.get(url, {
        params,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });

      if (response.data && response.data.data && response.data.data.children) {
        const posts = response.data.data.children;

        for (const post of posts) {
          const data = post.data;

          // Filter for questions (title contains ?, how, what, when, where, why)
          const isQuestion =
            data.title.includes('?') ||
            /\b(how|what|when|where|why|can|should|is|are|do|does)\b/i.test(data.title);

          if (isQuestion && data.ups > 0) {
            this.questions.push({
              title: data.title,
              subreddit: data.subreddit,
              url: `https://reddit.com${data.permalink}`,
              score: data.ups,
              num_comments: data.num_comments,
              created_utc: data.created_utc,
              source: 'reddit',
              query: query
            });
          }
        }
      }

      // Rate limiting
      await this.delay(2000);

    } catch (error) {
      console.error(`Error searching r/${subreddit}:`, error.message);
    }
  }

  async scrapeAll() {
    console.log('Starting Reddit scraper...\n');

    for (const query of SEARCH_QUERIES) {
      for (const subreddit of SUBREDDITS) {
        await this.searchSubreddit(subreddit, query);
      }
    }

    // Remove duplicates and sort by score
    this.questions = this.deduplicateAndSort();

    console.log(`\nFound ${this.questions.length} unique questions`);
    return this.questions;
  }

  deduplicateAndSort() {
    const seen = new Set();
    const unique = [];

    for (const q of this.questions) {
      const normalized = q.title.toLowerCase().trim();
      if (!seen.has(normalized)) {
        seen.add(normalized);
        unique.push(q);
      }
    }

    return unique.sort((a, b) => b.score - a.score);
  }

  async saveToFile() {
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = path.join(__dirname, '../data', `reddit-questions-${timestamp}.json`);

    await fs.mkdir(path.dirname(filename), { recursive: true });
    await fs.writeFile(filename, JSON.stringify(this.questions, null, 2));

    console.log(`Saved ${this.questions.length} questions to ${filename}`);
    return filename;
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Export for use in other modules
module.exports = RedditScraper;

// Run standalone if executed directly
if (require.main === module) {
  (async () => {
    const scraper = new RedditScraper();
    await scraper.scrapeAll();
    await scraper.saveToFile();
  })();
}
