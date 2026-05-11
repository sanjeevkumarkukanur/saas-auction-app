import { RedisModule } from '@libs/radius';
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PlansModule } from './modules/plans/plans.module';
import { SubscriptionsModule } from './modules/subscriptions/subscriptions.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { InvoicesModule } from './modules/invoices/invoices.module';

@Module({
  imports: [
    RedisModule,
    PrismaModule,
    PlansModule,
    SubscriptionsModule,
    PaymentsModule,
    InvoicesModule,
  ],
})
export class BillingModule {}
