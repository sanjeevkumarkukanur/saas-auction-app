import { Module } from '@nestjs/common';
import { SubscriptionsController } from './subscriptions.controller';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionsRepository } from './subscriptions.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService, SubscriptionsRepository, PrismaService],
  exports: [SubscriptionsService, SubscriptionsRepository],
})
export class SubscriptionsModule {}
