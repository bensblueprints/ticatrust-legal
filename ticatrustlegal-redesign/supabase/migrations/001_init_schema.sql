-- ============================================
-- TICA TRUSTLEGAL DATABASE SCHEMA
-- ============================================

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================
-- ADMIN USERS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    full_name VARCHAR(255),
    role VARCHAR(20) DEFAULT 'admin' CHECK (role IN ('super_admin', 'admin')),
    is_active BOOLEAN DEFAULT true,
    last_login TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- SITE SETTINGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS site_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    key VARCHAR(100) UNIQUE NOT NULL,
    value JSONB NOT NULL,
    category VARCHAR(50) NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- WIDGET SETTINGS (Social Media Links)
-- ============================================
INSERT INTO site_settings (key, value, category, description) VALUES
('widgets', '{
  "whatsappNumber": "+84354658272",
  "zaloNumber": "0354658272",
  "facebookUrl": "https://facebook.com",
  "aiLawyerEnabled": true
}'::jsonb, 'widgets', 'Social media and AI lawyer widget settings')
ON CONFLICT (key) DO NOTHING;

-- ============================================
-- BLOG POSTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(500) NOT NULL,
    description TEXT,
    content TEXT,
    category VARCHAR(100),
    featured_image VARCHAR(500),
    author VARCHAR(255),
    publish_date DATE NOT NULL,
    reading_time VARCHAR(20),
    is_published BOOLEAN DEFAULT false,
    is_featured_on_homepage BOOLEAN DEFAULT false,
    homepage_order INTEGER,
    view_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- CONTACT FORM SUBMISSIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    service VARCHAR(100),
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
    admin_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- ROW LEVEL SECURITY POLICIES
-- ============================================

-- Enable RLS on all tables
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Public can read published blog posts
CREATE POLICY "Public can read published blog posts"
ON blog_posts FOR SELECT
USING (is_published = true);

-- Public can read site settings
CREATE POLICY "Public can read site settings"
ON site_settings FOR SELECT
USING (true);

-- Public can insert contact submissions
CREATE POLICY "Public can submit contact forms"
ON contact_submissions FOR INSERT
WITH CHECK (true);

-- Admin policies will be added after auth is set up
-- For now, service role will handle admin operations

-- ============================================
-- INDEXES FOR PERFORMANCE
-- ============================================
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(is_published);
CREATE INDEX idx_blog_posts_featured ON blog_posts(is_featured_on_homepage);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX idx_contact_submissions_created ON contact_submissions(created_at DESC);

-- ============================================
-- FUNCTIONS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_site_settings_updated_at BEFORE UPDATE ON site_settings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_submissions_updated_at BEFORE UPDATE ON contact_submissions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- SEED DATA
-- ============================================

-- Create default admin user (password: admin123 - CHANGE THIS IN PRODUCTION!)
-- Password hash for 'admin123' using bcrypt
INSERT INTO admin_users (email, password_hash, full_name, role) VALUES
('admin@ticatrustlegal.com', crypt('admin123', gen_salt('bf')), 'Admin User', 'super_admin')
ON CONFLICT (email) DO NOTHING;

-- Add existing blog posts to database
INSERT INTO blog_posts (slug, title, description, category, publish_date, reading_time, is_published, is_featured_on_homepage) VALUES
('what-is-trc-vietnam', 'What is a Temporary Residence Card (TRC) in Vietnam? Complete Guide 2025', 'Everything you need to know about TRC in Vietnam including requirements, application process, costs, and timeline.', 'TRC Fundamentals', '2026-02-07', '12 min read', true, true),
('trc-vs-work-permit-vs-visa', 'TRC vs Work Permit vs Visa: Understanding the Differences', 'Confused about the difference between a TRC, work permit, and visa? This comprehensive guide breaks down each document.', 'TRC Fundamentals', '2026-02-07', '10 min read', true, true),
('types-of-trc-vietnam', '5 Types of TRC in Vietnam: Which One Do You Need?', 'Detailed breakdown of each TRC type with specific requirements and eligibility criteria.', 'TRC Fundamentals', '2026-02-07', '14 min read', true, true)
ON CONFLICT (slug) DO NOTHING;
