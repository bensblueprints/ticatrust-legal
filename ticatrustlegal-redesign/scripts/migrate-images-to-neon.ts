import fs from 'fs';
import path from 'path';
import { neon } from '@neondatabase/serverless';

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

if (!process.env.DATABASE_URL) {
  console.error('ERROR: DATABASE_URL environment variable is not set');
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

interface ImageFile {
  filePath: string;
  originalPath: string;
  category: string;
  mimeType: string;
}

// Recursively get all image files from a directory
function getAllImageFiles(dir: string, baseDir: string = dir): ImageFile[] {
  const files: ImageFile[] = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getAllImageFiles(fullPath, baseDir));
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico'];

      if (imageExtensions.includes(ext)) {
        const relativePath = fullPath.substring(baseDir.length);
        const category = path.dirname(relativePath).split('/')[1] || 'general';

        let mimeType = 'application/octet-stream';
        if (ext === '.jpg' || ext === '.jpeg') mimeType = 'image/jpeg';
        else if (ext === '.png') mimeType = 'image/png';
        else if (ext === '.gif') mimeType = 'image/gif';
        else if (ext === '.webp') mimeType = 'image/webp';
        else if (ext === '.svg') mimeType = 'image/svg+xml';
        else if (ext === '.ico') mimeType = 'image/x-icon';

        files.push({
          filePath: fullPath,
          originalPath: relativePath,
          category,
          mimeType,
        });
      }
    }
  }

  return files;
}

async function migrateImage(imageFile: ImageFile): Promise<boolean> {
  try {
    const buffer = fs.readFileSync(imageFile.filePath);
    const filename = path.basename(imageFile.filePath);

    await sql`
      INSERT INTO images (
        filename,
        original_path,
        mime_type,
        size_bytes,
        data,
        category
      ) VALUES (
        ${filename},
        ${imageFile.originalPath},
        ${imageFile.mimeType},
        ${buffer.length},
        ${buffer},
        ${imageFile.category}
      )
      ON CONFLICT (original_path)
      DO UPDATE SET
        data = ${buffer},
        mime_type = ${imageFile.mimeType},
        size_bytes = ${buffer.length},
        updated_at = NOW()
    `;

    console.log(`✓ Migrated: ${imageFile.originalPath} (${(buffer.length / 1024).toFixed(2)} KB)`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to migrate ${imageFile.originalPath}:`, error);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting image migration to Neon database...\n');

  const publicDir = path.join(process.cwd(), 'public');
  const imagesDir = path.join(publicDir, 'images');

  if (!fs.existsSync(imagesDir)) {
    console.error(`ERROR: Images directory not found at ${imagesDir}`);
    process.exit(1);
  }

  console.log(`📁 Scanning directory: ${imagesDir}\n`);

  const imageFiles = getAllImageFiles(imagesDir);

  console.log(`📊 Found ${imageFiles.length} images to migrate\n`);

  if (imageFiles.length === 0) {
    console.log('No images found. Exiting.');
    return;
  }

  let successCount = 0;
  let failCount = 0;

  for (const imageFile of imageFiles) {
    const success = await migrateImage(imageFile);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }

  console.log(`\n✅ Migration complete!`);
  console.log(`   Success: ${successCount}`);
  console.log(`   Failed: ${failCount}`);
  console.log(`   Total: ${imageFiles.length}`);
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
