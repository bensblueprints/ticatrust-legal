/**
 * Slack Notifier
 *
 * Sends notifications to Slack when new blog post opportunities are identified.
 */

const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

class SlackNotifier {
  constructor(webhookUrl) {
    this.webhookUrl = webhookUrl || process.env.SLACK_WEBHOOK_URL;

    if (!this.webhookUrl) {
      console.warn('⚠️  Slack webhook URL not configured. Set SLACK_WEBHOOK_URL environment variable.');
    }
  }

  async sendNotification(message, questions) {
    if (!this.webhookUrl) {
      console.log('📧 Slack notification (not sent - no webhook configured):');
      console.log(message);
      return;
    }

    try {
      const blocks = this.buildMessageBlocks(message, questions);

      const response = await axios.post(this.webhookUrl, {
        text: message,
        blocks: blocks
      });

      console.log('✅ Slack notification sent successfully');
      return response.data;

    } catch (error) {
      console.error('❌ Error sending Slack notification:', error.message);
      throw error;
    }
  }

  buildMessageBlocks(message, questions) {
    const blocks = [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: '📝 New Blog Post Opportunities',
          emoji: true
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: message
        }
      },
      {
        type: 'divider'
      }
    ];

    if (questions && questions.length > 0) {
      // Add top 5 questions
      const topQuestions = questions.slice(0, 5);

      blocks.push({
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*Top Questions Found:*'
        }
      });

      for (const q of topQuestions) {
        const source = q.source === 'reddit' ? '📱 Reddit' : '💭 Quora';
        const score = q.score ? ` (${q.score} ⬆️)` : '';

        blocks.push({
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `${source}${score}\n*${q.title}*`
          }
        });
      }

      blocks.push({
        type: 'divider'
      });

      blocks.push({
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `_Found ${questions.length} total questions. Check the spreadsheet for full details._`
        }
      });
    }

    blocks.push({
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'View Spreadsheet',
            emoji: true
          },
          url: process.env.GOOGLE_SHEETS_URL || 'https://docs.google.com/spreadsheets',
          style: 'primary'
        }
      ]
    });

    return blocks;
  }

  async notifyDailyRun(stats) {
    const message = `🎯 *Daily Content Research Complete!*\n\n` +
      `• Reddit Questions: ${stats.reddit}\n` +
      `• Quora Questions: ${stats.quora}\n` +
      `• Google Trends Topics: ${stats.trends}\n` +
      `• Total Opportunities: ${stats.total}\n\n` +
      `The data has been added to the spreadsheet. Review and select topics for blog posts.`;

    await this.sendNotification(message, stats.topQuestions);
  }

  async notifyError(error) {
    const message = `❌ *Automation Error*\n\n` +
      `An error occurred during the daily content research:\n\n` +
      `\`\`\`${error.message}\`\`\``;

    await this.sendNotification(message);
  }
}

// Export for use in other modules
module.exports = SlackNotifier;

// Test standalone
if (require.main === module) {
  (async () => {
    const notifier = new SlackNotifier();

    const testStats = {
      reddit: 45,
      quora: 32,
      trends: 15,
      total: 92,
      topQuestions: [
        {
          title: 'How to register a company in Vietnam as a foreigner?',
          source: 'reddit',
          score: 156
        },
        {
          title: 'What are the tax incentives for foreign investors in Vietnam?',
          source: 'quora'
        },
        {
          title: 'Vietnam work permit requirements 2026',
          source: 'reddit',
          score: 89
        }
      ]
    };

    await notifier.notifyDailyRun(testStats);
    console.log('Test notification sent!');
  })();
}
