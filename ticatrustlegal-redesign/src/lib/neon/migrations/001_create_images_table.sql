-- ============================================
-- IMAGES TABLE FOR NEON DATABASE
-- ============================================

CREATE TABLE IF NOT EXISTS images (
    id SERIAL PRIMARY KEY,
    filename VARCHAR(500) NOT NULL,
    original_path VARCHAR(1000) NOT NULL UNIQUE,
    mime_type VARCHAR(100) NOT NULL,
    size_bytes INTEGER NOT NULL,
    width INTEGER,
    height INTEGER,
    data BYTEA NOT NULL,
    alt_text TEXT,
    category VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for faster lookups
CREATE INDEX idx_images_filename ON images(filename);
CREATE INDEX idx_images_original_path ON images(original_path);
CREATE INDEX idx_images_category ON images(category);
CREATE INDEX idx_images_created_at ON images(created_at DESC);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_images_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for updated_at
CREATE TRIGGER update_images_timestamp
    BEFORE UPDATE ON images
    FOR EACH ROW
    EXECUTE FUNCTION update_images_updated_at();

-- Add comment to table
COMMENT ON TABLE images IS 'Stores all website images as binary data for serving via API';
