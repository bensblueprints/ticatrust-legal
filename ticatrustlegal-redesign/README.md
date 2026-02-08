# TICA TrustLegal - Modern Website Redesign

A stunning, modern redesign of the Tica Trust Legal website with sophisticated dark theme, gold accents, and automated content generation system.

## 🎨 Design Highlights

- **Modern Vietnamese Luxury Aesthetic**: Dark sophisticated base with warm gold accents inspired by Vietnamese silk and lacquer work
- **Premium Typography**: Cormorant Garamond (elegant serif) + Manrope (refined sans-serif)
- **Smooth Animations**: Cinematic page transitions and micro-interactions using Framer Motion
- **Fully Responsive**: Mobile-first design optimized for all devices
- **SEO Optimized**: Built with Next.js App Router for optimal performance and SEO

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: For type safety

### Automation System
- **Web Scraping**: Custom Reddit & Quora scrapers
- **Trends Analysis**: Google Trends API integration
- **Workflow**: n8n automation
- **Notifications**: Slack webhooks
- **Data Export**: CSV generation for Google Sheets

## 📁 Project Structure

```
ticatrustlegal-redesign/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Homepage
│   │   ├── about/              # About Us page
│   │   ├── services/           # All service pages
│   │   ├── news/               # Blog/News section
│   │   └── layout.tsx          # Root layout
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   └── ui/                 # Reusable UI components
│   └── lib/                    # Utilities
├── automation/                 # Content generation system
│   ├── scrapers/               # Reddit & Quora scrapers
│   ├── utils/                  # Google Trends, Slack integration
│   ├── n8n/                    # n8n workflow configuration
│   └── index.js                # Main orchestrator
├── public/                     # Static assets
└── assets/                     # Downloaded images from original site
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 20+
- npm or yarn
- n8n (for automation workflows)

### Installation

1. **Clone the repository**
```bash
cd "Tica Trust Legal"/ticatrustlegal-redesign
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Install automation dependencies**
```bash
cd automation
npm install
cd ..
```

4. **Configure environment variables**

Create `.env.local` in the root directory:
```env
# Slack Integration
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL

# Google Sheets (for n8n workflow)
GOOGLE_SHEETS_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID

# Automation (optional - for advanced features)
REDDIT_CLIENT_ID=your_reddit_client_id
REDDIT_CLIENT_SECRET=your_reddit_secret
```

5. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🤖 Automation System

### Overview
The automation system finds trending questions about Vietnam business and investment from Reddit, Quora, and Google Trends, then consolidates them into a spreadsheet for blog post planning.

### Running the Automation

**Manual Run:**
```bash
cd automation
node index.js
```

**Individual Components:**
```bash
# Reddit scraper only
npm run scrape:reddit

# Quora scraper only
npm run scrape:quora

# Google Trends analysis only
npm run trends

# Test Slack notification
npm run test:slack
```

### Setting Up Daily Automation

#### Option 1: Using n8n (Recommended)

1. Import the workflow from `automation/n8n/workflow.json`
2. Configure credentials:
   - Google Sheets OAuth
   - Slack webhook URL
3. Update file paths in the workflow nodes
4. Activate the workflow (runs daily at 9 AM)

#### Option 2: Using Cron Job

Add to your crontab:
```bash
# Run every day at 9 AM
0 9 * * * cd /path/to/ticatrustlegal-redesign/automation && node index.js >> /var/log/content-automation.log 2>&1
```

### Automation Output

The system generates:
1. **JSON files**: Raw data from each source (`automation/data/`)
2. **CSV file**: Prioritized blog opportunities ready for spreadsheet import
3. **Slack notification**: Summary with top questions and link to spreadsheet

### Slack Notification Format

```
📝 New Blog Post Opportunities

🎯 Daily Content Research Complete!

• Reddit Questions: 45
• Quora Questions: 32
• Google Trends Topics: 15
• Total Opportunities: 92

Top Questions Found:

📱 Reddit (156 ⬆️)
**How to register a company in Vietnam as a foreigner?**

💭 Quora
**What are the tax incentives for foreign investors in Vietnam?**

... (top 5 shown)

[View Spreadsheet Button]
```

## 📝 Pages Included

### Main Pages
- ✅ **Homepage**: Hero, services, testimonials, CTAs
- ✅ **About Us**: Company info, vision, mission, core values
- ✅ **Services** (5 pages):
  - Business Establishment
  - Business License Change
  - Sublicense Services
  - Foreign Labor & Visa Management
  - Corporate Legal Services
- ✅ **News/Blog**: Filterable blog listing with search
- 🔄 **Individual Blog Posts**: Template ready for CMS integration

### Additional Pages Needed (Follow the Same Pattern)
You can easily create additional service pages by copying the business-establishment template and modifying the content.

## 🎨 Design System

### Colors
```css
Primary Gold: #C9A45C
Burgundy: #8B1E3F
Charcoal 950: #0A0C10
Charcoal 900: #1F2228
Charcoal 800: #3A3D46
```

### Typography
- **Headings**: Cormorant Garamond (serif)
- **Body**: Manrope (sans-serif)

### Key Components
- Gradient text effects
- Mesh gradient backgrounds
- Grain texture overlays
- Smooth hover animations
- Parallax scroll effects

## 🚢 Deployment

### Deploy to Netlify

1. **Build the application**
```bash
npm run build
```

2. **Test the production build**
```bash
npm start
```

3. **Deploy to Netlify**
```bash
# ⚠️ CODE 777 REQUIRED - ASK BEN FIRST ⚠️

# After getting approval:
netlify deploy --prod --dir=.next
```

### Environment Variables on Netlify

Add these in Netlify Dashboard → Site Settings → Environment Variables:
```
SLACK_WEBHOOK_URL=your_slack_webhook
GOOGLE_SHEETS_URL=your_google_sheets_url
```

### Custom Domain Setup

1. **In Netlify**:
   - Site Settings → Domain Management
   - Add custom domain: `ticatrustlegal.com`

2. **In Cloudflare** (DNS):
```
Type: CNAME
Name: @
Content: your-site.netlify.app
Proxy: ✅ Proxied (orange cloud)

Type: CNAME
Name: www
Content: your-site.netlify.app
Proxy: ✅ Proxied (orange cloud)
```

3. **SSL**: Auto-configured by Cloudflare

## 📊 Content Strategy

### Blog Post Workflow

1. **Daily (9 AM)**: Automation runs, finds questions
2. **Morning**: Review Slack notification & spreadsheet
3. **Select Topics**: Choose 1-3 questions to answer
4. **Write Content**: Create comprehensive blog posts
5. **Publish**: Add to website and respond to original questions with helpful links

### Target Keywords
- Vietnam business law
- Foreign investment Vietnam
- Company registration Vietnam
- Work permit Vietnam
- TRC Vietnam
- Tax incentives Vietnam
- Manufacturing Vietnam
- Legal services Vietnam

## 🔧 Maintenance

### Regular Tasks
- **Daily**: Review automation results
- **Weekly**: Publish 2-3 blog posts
- **Monthly**: Review analytics, update popular content
- **Quarterly**: Audit all service pages for accuracy

### Updating Content
Blog posts can be added as:
1. **Markdown files** in `src/content/blog/` (requires simple CMS setup)
2. **Database entries** (Supabase integration)
3. **Headless CMS** (Contentful, Sanity, etc.)

## 🐛 Troubleshooting

### Automation Issues

**Scraping fails:**
- Check if Reddit/Quora changed their HTML structure
- Verify network connectivity
- Check rate limiting (add delays if needed)

**Slack notifications not sending:**
- Verify SLACK_WEBHOOK_URL is correct
- Check Slack app permissions
- Test with `npm run test:slack`

**Google Trends errors:**
- API may have rate limits
- Try reducing number of keywords
- Add longer delays between requests

### Build Issues

**TypeScript errors:**
```bash
npm run lint
npx tsc --noEmit
```

**Tailwind not working:**
```bash
rm -rf .next
npm run dev
```

## 📞 Support

For questions or issues:
- **Email**: Ben@JustFeatured.com
- **Client**: tica.trustlegal@gmail.com

## 📄 License

Proprietary - © 2026 TICA TrustLegal & Advanced Marketing Limited

---

**Built with ❤️ by Benjamin Tate - Advanced Marketing Limited**

Delivering premium digital experiences for exceptional legal services.
