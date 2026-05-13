import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/platform-client';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL ?? '',
});
const prisma = new PrismaClient({ adapter });

// ── types ─────────────────────────────────────
interface PageSeed {
  key: string;
  name: string;
  description: string;
}

const pages: PageSeed[] = [
  { key: 'dashboard', name: 'Dashboard', description: 'Main dashboard' },
  {
    key: 'auction-control',
    name: 'Auction Control',
    description: 'Auction control panel',
  },
  { key: 'manage-teams', name: 'Manage Teams', description: 'Create teams' },
  {
    key: 'manage-players',
    name: 'Manage Players',
    description: 'Manage players',
  },
  {
    key: 'select-for-auction',
    name: 'Select for Auction',
    description: 'Select players for auction',
  },
  {
    key: 'unsold-players',
    name: 'Unsold Players',
    description: 'Players not sold',
  },
  {
    key: 'sold-players',
    name: 'Sold Players',
    description: 'Players sold in auction',
  },
];

const pageActions: Record<string, string[]> = {
  dashboard: ['LIST'],
  'auction-control': ['LIST', 'CREATE', 'UPDATE'],
  'manage-teams': ['LIST', 'CREATE', 'UPDATE', 'DELETE'],
  'manage-players': ['LIST', 'CREATE', 'UPDATE', 'DELETE'],
  'select-for-auction': ['LIST'],
  'unsold-players': ['LIST'],
  'sold-players': ['LIST'],
};

// ── seeders ───────────────────────────────────
async function seedPages(): Promise<void> {
  for (const page of pages) {
    await prisma.page.upsert({
      where: { key: page.key },
      update: {},
      create: page,
    });
  }
  console.log('✅ Pages seeded');
}

async function seedPermissions(): Promise<void> {
  const seededPages = await prisma.page.findMany();

  for (const page of seededPages) {
    const actions = pageActions[page.key] ?? ['LIST'];

    for (const action of actions) {
      const key = `${page.key.replace(/-/g, '_').toUpperCase()}_${action}`;

      await prisma.permission.upsert({
        where: { key },
        update: {},
        create: {
          key,
          name: `${action} ${page.name}`,
          pageId: page.id,
        },
      });
    }
  }
  console.log('✅ Permissions seeded');
}

// ── main ──────────────────────────────────────
async function main(): Promise<void> {
  console.log('🌱 Starting seed...');
  await seedPages();
  await seedPermissions();
  console.log('✅ Seed complete');
}

main()
  .catch((err) => {
    console.error('❌ Seed failed:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
