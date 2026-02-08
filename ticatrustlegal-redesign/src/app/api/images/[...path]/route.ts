import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/neon/client';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const resolvedParams = await params;
    const imagePath = '/' + resolvedParams.path.join('/');

    // Query database for image
    const result = await sql`
      SELECT data, mime_type, filename
      FROM images
      WHERE original_path = ${imagePath}
      LIMIT 1
    `;

    if (result.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Image not found' },
        { status: 404 }
      );
    }

    const image = result[0];

    // Return image with proper headers
    return new NextResponse(image.data, {
      headers: {
        'Content-Type': image.mime_type,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Disposition': `inline; filename="${image.filename}"`,
      },
    });
  } catch (error) {
    console.error('[Image Serve Error]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to serve image' },
      { status: 500 }
    );
  }
}
