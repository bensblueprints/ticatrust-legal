import { neon } from '@neondatabase/serverless';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DATABASE_URL) {
  console.error('❌ ERROR: DATABASE_URL environment variable is not set');
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

async function initDatabase() {
  console.log('🚀 Initializing Neon database...\n');

  try {
    // Test connection
    console.log('📡 Testing database connection...');
    const testResult = await sql`SELECT NOW() as current_time`;
    console.log('✅ Connection successful!');
    console.log(`   Server time: ${testResult[0].current_time}\n`);

    // Read migration file
    const migrationPath = path.join(process.cwd(), 'src/lib/neon/migrations/001_create_images_table.sql');
    const migrationSQL = fs.readFileSync(migrationPath, 'utf-8');

    console.log('📋 Creating images table...');

    // Execute migration (split by semicolon to run multiple statements)
    const statements = migrationSQL
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'));

    for (const statement of statements) {
      if (statement.toLowerCase().includes('create') ||
          statement.toLowerCase().includes('comment') ||
          statement.toLowerCase().includes('function')) {
        await sql.unsafe(statement);
      }
    }

    console.log('✅ Images table created successfully!\n');

    // Verify table exists
    console.log('🔍 Verifying table structure...');
    const tableInfo = await sql`
      SELECT column_name, data_type, character_maximum_length
      FROM information_schema.columns
      WHERE table_name = 'images'
      ORDER BY ordinal_position
    `;

    console.log('📊 Table columns:');
    tableInfo.forEach(col => {
      const length = col.character_maximum_length ? `(${col.character_maximum_length})` : '';
      console.log(`   - ${col.column_name}: ${col.data_type}${length}`);
    });

    console.log('\n✅ Database initialization complete!');
    console.log('   Ready to migrate images with: npm run migrate-images\n');

  } catch (error: any) {
    console.error('❌ Database initialization failed:', error.message);
    process.exit(1);
  }
}

initDatabase();
