import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/neon/client';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const originalPath = formData.get('originalPath') as string;
    const category = formData.get('category') as string || 'general';
    const altText = formData.get('altText') as string || '';

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Get image dimensions if it's an image
    let width = null;
    let height = null;

    // Insert into database
    const result = await sql`
      INSERT INTO images (
        filename,
        original_path,
        mime_type,
        size_bytes,
        width,
        height,
        data,
        alt_text,
        category
      ) VALUES (
        ${file.name},
        ${originalPath || `/images/${file.name}`},
        ${file.type},
        ${buffer.length},
        ${width},
        ${height},
        ${buffer},
        ${altText},
        ${category}
      )
      ON CONFLICT (original_path)
      DO UPDATE SET
        data = ${buffer},
        mime_type = ${file.type},
        size_bytes = ${buffer.length},
        updated_at = NOW()
      RETURNING id, filename, original_path
    `;

    return NextResponse.json({
      success: true,
      image: result[0],
    });
  } catch (error) {
    console.error('[Image Upload Error]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to upload image' },
      { status: 500 }
    );
  }
}
