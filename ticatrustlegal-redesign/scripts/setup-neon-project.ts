import dotenv from 'dotenv';
dotenv.config();

const NEON_API_KEY = process.env.NEON_API_KEY || 'napi_nh4mb1ow6750z9w6gh6rnvjhhyru4zod1op6xu7fppwwk4d0coz6ibyh5fy263pe';
const NEON_API_BASE = 'https://console.neon.tech/api/v2';

console.log('🔑 Using API Key:', NEON_API_KEY.substring(0, 10) + '...');

async function setupNeonProject() {
  console.log('🚀 Setting up Neon project via API...\n');

  try {
    // Get current user/org info first
    console.log('👤 Fetching organization information...');
    const userResponse = await fetch(`${NEON_API_BASE}/users/me`, {
      headers: {
        'Authorization': `Bearer ${NEON_API_KEY}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if (!userResponse.ok) {
      const errorBody = await userResponse.text();
      console.error('User API Error:', errorBody);
      throw new Error(`Failed to get user info: ${userResponse.status}`);
    }

    const userData = await userResponse.json();
    console.log(`✅ Logged in as: ${userData.name} (${userData.email})\n`);

    // Get organizations
    console.log('🏢 Fetching organizations...');
    const orgsResponse = await fetch(`${NEON_API_BASE}/users/me/organizations`, {
      headers: {
        'Authorization': `Bearer ${NEON_API_KEY}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if (!orgsResponse.ok) {
      const errorBody = await orgsResponse.text();
      console.error('Orgs API Error:', errorBody);
      throw new Error(`Failed to get organizations: ${orgsResponse.status}`);
    }

    const orgsData = await orgsResponse.json();
    console.log('Organizations data:', JSON.stringify(orgsData, null, 2));

    const orgId = orgsData.organizations?.[0]?.id || orgsData[0]?.id;

    if (!orgId) {
      throw new Error('No organization found. Please create one in Neon console first.');
    }

    console.log(`✅ Organization ID: ${orgId}\n`);

    // List existing projects
    console.log('📋 Checking for existing projects...');
    const listResponse = await fetch(`${NEON_API_BASE}/projects?org_id=${orgId}`, {
      headers: {
        'Authorization': `Bearer ${NEON_API_KEY}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if (!listResponse.ok) {
      const errorBody = await listResponse.text();
      console.error('API Error Response:', errorBody);
      throw new Error(`Failed to list projects: ${listResponse.status} ${listResponse.statusText}\nResponse: ${errorBody}`);
    }

    const listData = await listResponse.json();
    console.log(`✅ Found ${listData.projects.length} existing project(s)\n`);

    let project;

    if (listData.projects.length > 0) {
      // Use existing project
      project = listData.projects[0];
      console.log(`📦 Using existing project: ${project.name} (${project.id})`);
    } else {
      // Create new project
      console.log('📦 Creating new Neon project...');
      const createResponse = await fetch(`${NEON_API_BASE}/projects`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${NEON_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          project: {
            name: 'ticatrustlegal-images',
            region_id: 'aws-us-east-2',
          },
        }),
      });

      if (!createResponse.ok) {
        const errorText = await createResponse.text();
        throw new Error(`Failed to create project: ${createResponse.statusText}\n${errorText}`);
      }

      const createData = await createResponse.json();
      project = createData.project;
      console.log(`✅ Created project: ${project.name} (${project.id})`);
    }

    // Get connection string
    console.log('\n🔗 Fetching connection string...');
    const connResponse = await fetch(
      `${NEON_API_BASE}/projects/${project.id}/connection_uri?database_name=neondb&role_name=neondb_owner`,
      {
        headers: {
          'Authorization': `Bearer ${NEON_API_KEY}`,
        },
      }
    );

    if (!connResponse.ok) {
      throw new Error(`Failed to get connection string: ${connResponse.statusText}`);
    }

    const connData = await connResponse.json();
    const connectionString = connData.uri;

    console.log('✅ Connection string obtained!\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📝 CONNECTION STRING:');
    console.log(connectionString);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // Write to .env file
    const envContent = `# ============================================
# NEON DATABASE (PostgreSQL)
# ============================================
DATABASE_URL=${connectionString}
NEON_API_KEY=${NEON_API_KEY}

# ============================================
# APPLICATION
# ============================================
NEXT_PUBLIC_APP_URL=https://ticatrust-preview.netlify.app
NEXT_PUBLIC_APP_NAME=TICA TrustLegal
NEXT_PUBLIC_CONTACT_EMAIL=tica.trustlegal@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=+84354658272
`;

    const fs = require('fs');
    const path = require('path');
    fs.writeFileSync(path.join(process.cwd(), '.env'), envContent);

    console.log('✅ Updated .env file with connection string');
    console.log('\n🎯 Next steps:');
    console.log('   1. Run: npm run init-neon (to create images table)');
    console.log('   2. Run: npm run migrate-images (to upload all images)\n');

    return connectionString;

  } catch (error: any) {
    console.error('❌ Setup failed:', error.message);
    if (error.stack) {
      console.error('Stack:', error.stack);
    }
    process.exit(1);
  }
}

setupNeonProject();
