import { PrismaClient } from './generated/billing-client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function seedPlans() {
  const plans = [
    {
      key: 'free',
      name: 'Free Plan',
      price: 0,
      currency: 'USD',
      limits: {
        maxUsers: 2,
        maxTeams: 4,
        maxPlayers: 40,
      },
    },
    {
      key: 'pro',
      name: 'Pro Plan',
      price: 29,
      currency: 'USD',
      limits: {
        maxUsers: 10,
        maxTeams: 10,
        maxPlayers: 200,
      },
    },
  ];

  for (const plan of plans) {
    await prisma.plan.upsert({
      where: { key: plan.key },
      update: {},
      create: {
        key: plan.key,
        name: plan.name,
        price: plan.price,
        currency: plan.currency,
        limits: {
          create: plan.limits,
        },
      },
    });
  }

  console.log('✅ Billing Plans seeded');
}

async function main() {
  await seedPlans();
}

main()
  .catch((error) => {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
