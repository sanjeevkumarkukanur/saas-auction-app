import 'dotenv/config';
import { PrismaClient } from './generated/tenant-client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
  log: ['error', 'warn'],
});

async function seedSuperAdmin() {
  console.log('🌱 Seeding Super Admin...');

  let superAdminRole = await prisma.role.findFirst({
    where: {
      name: 'SUPER_ADMIN',
      tenantId: null,
    },
  });

  if (!superAdminRole) {
    superAdminRole = await prisma.role.create({
      data: {
        name: 'SUPER_ADMIN',
        tenantId: null,
      },
    });
  }

  const email = 'superadmin@auction.com';
  const hashedPassword = await bcrypt.hash('Admin@123', 10);

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: 'Super Admin',
        tenantId: null,
        roleId: superAdminRole.id,
      },
    });

    console.log('✅ Super admin created');
  } else {
    console.log('ℹ️ Super admin already exists');
  }
}

async function main() {
  console.log('🌱 Starting seed...');
  await seedSuperAdmin();
  console.log('🎉 Seed completed');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
