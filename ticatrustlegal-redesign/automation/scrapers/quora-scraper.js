/**
 * Quora Scraper for Vietnam Business Questions
 *
 * This script scrapes Quora for questions about starting businesses and investing in Vietnam.
 * Note: Quora has anti-scraping measures, so this uses their public search API approach.
 */

const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');
const cheerio = require('cheerio');

const SEARCH_QUERIES = [
  'start business vietnam',
  'invest in vietnam',
  'company registration vietnam',
  'visa vietnam business',
  'work permit vietnam',
  'legal requirements vietnam business',
  'factory setup vietnam',
  'tax vietnam foreign investor',
  'trc vietnam how to get',
  'vietnam business opportunities'
];

class QuoraScraper {
  constructor() {
    this.baseUrl = 'https://www.quora.com';
    this.questions = [];
  }

  async searchQuestions(query) {
    try {
      console.log(`Searching Quora for: ${query}`);

      const url = `${this.baseUrl}/search?q=${encodeURIComponent(query)}`;

      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Referer': 'https://www.quora.com/',
        },
        timeout: 15000
      });

      const $ = cheerio.load(response.data);

      // Quora's structure changes frequently, this is a basic extraction
      // In production, you'd want to use Quora's API or a headless browser
      $('[class*="Question"]').each((i, element) => {
        const title = $(element).find('[class*="question_text"]').text().trim() ||
                      $(element).text().trim();

        if (title && title.length > 10) {
          const link = $(element).find('a').attr('href');

          this.questions.push({
            title: title,
            url: link ? `${this.baseUrl}${link}` : null,
            source: 'quora',
            query: query,
            scraped_at: new Date().toISOString()
          });
        }
      });

      await this.delay(3000); // Rate limiting

    } catch (error) {
      console.error(`Error searching Quora for "${query}":`, error.message);

      // Fallback: Add common questions manually if scraping fails
      this.addFallbackQuestions(query);
    }
  }

  // Fallback questions based on common Vietnam business queries
  addFallbackQuestions(query) {
    const fallbackQuestions = {
      'start business vietnam': [
        'What are the steps to start a business in Vietnam as a foreigner?',
        'How much does it cost to register a company in Vietnam?',
        'Can foreigners own 100% of a business in Vietnam?'
      ],
      'invest in vietnam': [
        'What are the best investment opportunities in Vietnam in 2026?',
        'What industries are growing fastest in Vietnam?',
        'How to invest in Vietnam real estate as a foreigner?'
      ],
      'visa vietnam business': [
        'What visa do I need to start a business in Vietnam?',
        'How to get a business visa for Vietnam?',
        'Can I convert a tourist visa to a business visa in Vietnam?'
      ],
      'work permit vietnam': [
        'How long does it take to get a work permit in Vietnam?',
        'What documents are needed for a Vietnam work permit?',
        'Can I work in Vietnam without a work permit?'
      ],
      'trc vietnam how to get': [
        'How to get a Temporary Residence Card (TRC) in Vietnam?',
        'What is the difference between TRC and work permit in Vietnam?',
        'How long is a TRC valid in Vietnam?'
      ]
    };

    const relevantQuestions = fallbackQuestions[query] || [];

    for (const q of relevantQuestions) {
      this.questions.push({
        title: q,
        url: null,
        source: 'quora_fallback',
        query: query,
        scraped_at: new Date().toISOString()
      });
    }
  }

  async scrapeAll() {
    console.log('Starting Quora scraper...\n');

    for (const query of SEARCH_QUERIES) {
      await this.searchQuestions(query);
    }

    // Remove duplicates
    this.questions = this.deduplicate();

    console.log(`\nFound ${this.questions.length} unique questions from Quora`);
    return this.questions;
  }

  deduplicate() {
    const seen = new Set();
    const unique = [];

    for (const q of this.questions) {
      const normalized = q.title.toLowerCase().trim();
      if (!seen.has(normalized) && normalized.length > 10) {
        seen.add(normalized);
        unique.push(q);
      }
    }

    return unique;
  }

  async saveToFile() {
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = path.join(__dirname, '../data', `quora-questions-${timestamp}.json`);

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
module.exports = QuoraScraper;

// Run standalone if executed directly
if (require.main === module) {
  (async () => {
    const scraper = new QuoraScraper();
    await scraper.scrapeAll();
    await scraper.saveToFile();
  })();
}
