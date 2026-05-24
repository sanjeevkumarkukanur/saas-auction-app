import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../prisma/generated/notification-client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly pool: Pool;

  constructor() {
    const poolInstance = new Pool({
      connectionString: process.env.DATABASE_URL as string,
    });

    super({
      adapter: new PrismaPg(poolInstance),
      log: ['error', 'warn'],
    });

    this.pool = poolInstance;
  }

  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
