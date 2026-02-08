import { NextRequest, NextResponse } from 'next/server';

// Temporary in-memory storage - will be replaced with Supabase
const defaultSettings = {
  whatsappNumber: '+84354658272',
  zaloNumber: '0354658272',
  facebookUrl: 'https://facebook.com',
  aiLawyerEnabled: true,
};

export async function GET(request: NextRequest) {
  try {
    // TODO: Fetch from Supabase database
    return NextResponse.json({
      success: true,
      settings: defaultSettings,
    });
  } catch (error) {
    console.error('[Widget Settings Error]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to load settings' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();

    // TODO: Validate admin authentication
    // TODO: Update Supabase database

    return NextResponse.json({
      success: true,
      message: 'Settings updated successfully',
      settings: body,
    });
  } catch (error) {
    console.error('[Widget Settings Update Error]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update settings' },
      { status: 500 }
    );
  }
}
