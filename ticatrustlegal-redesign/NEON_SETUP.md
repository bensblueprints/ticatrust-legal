# Neon Database Setup for Image Storage

This project uses **Neon PostgreSQL** to store and serve all website images as binary data.

## Prerequisites

1. Neon account (sign up at https://neon.tech)
2. Node.js installed

## Setup Steps

### 1. Create Neon Database

1. Go to https://console.neon.tech
2. Create a new project (or use existing)
3. Copy your connection string - it looks like:
   ```
   postgresql://[user]:[password]@[host]/[database]?sslmode=require
   ```

### 2. Configure Environment Variables

Update your `.env` file with your Neon credentials:

```env
DATABASE_URL=postgresql://your_user:your_password@your_host/your_database?sslmode=require
NEON_API_KEY=napi_xxxxxxxxxxxxxx
```

You can find:
- **DATABASE_URL**: Neon Console → Your Project → Connection Details
- **NEON_API_KEY**: Neon Console → Account → API Keys

### 3. Initialize Database Schema

Run the SQL migration to create the `images` table:

```bash
# Option 1: Using Neon SQL Editor
# Copy the contents of src/lib/neon/migrations/001_create_images_table.sql
# Paste into Neon Console → SQL Editor → Run

# Option 2: Using psql command line
psql "postgresql://your_connection_string" -f src/lib/neon/migrations/001_create_images_table.sql
```

### 4. Migrate Existing Images

Run the migration script to upload all images from `/public/images` to Neon:

```bash
npm run migrate-images
```

This will:
- Scan all images in `/public/images`
- Upload them to Neon database as binary data
- Preserve directory structure in the `original_path` field
- Show progress for each image

Expected output:
```
🚀 Starting image migration to Neon database...
📁 Scanning directory: /path/to/public/images
📊 Found 77 images to migrate

✓ Migrated: /images/about/head-office.png (245.32 KB)
✓ Migrated: /images/services/business-establishment-1.png (189.45 KB)
...

✅ Migration complete!
   Success: 77
   Failed: 0
   Total: 77
```

### 5. How Images Are Served

Images are now served through the API route `/api/images/[...path]`:

**Before (static files):**
```jsx
<Image src="/images/about/head-office.png" alt="Office" />
```

**After (database-served):**
```jsx
<Image src="/api/images/images/about/head-office.png" alt="Office" />
```

The API automatically:
- Retrieves binary data from Neon
- Sets proper Content-Type headers
- Enables aggressive caching (1 year)
- Serves images efficiently

### 6. Adding New Images

**Via Upload API:**
```bash
curl -X POST http://localhost:3000/api/images/upload \
  -F "file=@/path/to/image.png" \
  -F "originalPath=/images/category/image.png" \
  -F "category=services" \
  -F "altText=Description of image"
```

**Via Migration Script:**
1. Add image to `/public/images/[category]/`
2. Run `npm run migrate-images`
3. Image will be uploaded to database

## Database Schema

The `images` table structure:

| Column | Type | Description |
|--------|------|-------------|
| `id` | SERIAL | Primary key |
| `filename` | VARCHAR(500) | Original filename |
| `original_path` | VARCHAR(1000) | Path from /public (unique) |
| `mime_type` | VARCHAR(100) | Image MIME type |
| `size_bytes` | INTEGER | File size in bytes |
| `width` | INTEGER | Image width (optional) |
| `height` | INTEGER | Image height (optional) |
| `data` | BYTEA | Binary image data |
| `alt_text` | TEXT | Accessibility text |
| `category` | VARCHAR(100) | Image category |
| `created_at` | TIMESTAMPTZ | Upload timestamp |
| `updated_at` | TIMESTAMPTZ | Last update timestamp |

## Benefits of Database Storage

✅ **Centralized Management**: All images in one queryable location
✅ **Version Control**: Track image updates with timestamps
✅ **Metadata Storage**: Store alt text, categories, dimensions with images
✅ **No CDN Needed**: Neon serves images globally with low latency
✅ **Backup Built-in**: Database backups include all images
✅ **Easy Migration**: Move between environments with SQL dump

## Performance

- **Caching**: API sets 1-year cache headers
- **Compression**: Neon automatically compresses BYTEA data
- **Edge**: Neon's global network ensures fast delivery
- **CDN Ready**: Can front API with Cloudflare/Netlify CDN

## Monitoring

Check image stats in Neon SQL Editor:

```sql
-- Total images and storage
SELECT
  COUNT(*) as total_images,
  SUM(size_bytes) / 1024 / 1024 as total_mb
FROM images;

-- Images by category
SELECT
  category,
  COUNT(*) as count,
  SUM(size_bytes) / 1024 / 1024 as size_mb
FROM images
GROUP BY category
ORDER BY count DESC;

-- Largest images
SELECT
  filename,
  category,
  size_bytes / 1024 as size_kb
FROM images
ORDER BY size_bytes DESC
LIMIT 10;
```

## Troubleshooting

**Error: "DATABASE_URL environment variable is not set"**
- Check `.env` file exists and contains DATABASE_URL
- Verify environment variable is loaded

**Error: "Connection refused"**
- Check Neon project is active
- Verify connection string is correct
- Ensure IP is not blocked (Neon allows all by default)

**Error: "relation 'images' does not exist"**
- Run the migration SQL file first
- Verify table was created: `SELECT * FROM images LIMIT 1;`

**Images not displaying:**
- Check browser console for 404 errors
- Verify image path in database matches request path
- Check API route is accessible: `/api/images/test`

## Cost Considerations

Neon Free Tier includes:
- 500 MB storage
- 5 compute hours per month

For production with many images:
- Consider Neon Pro ($19/month) for 10 GB storage
- Or use Cloudflare R2 + Neon for metadata only
- Current 77 images ≈ 15-20 MB (well within free tier)
