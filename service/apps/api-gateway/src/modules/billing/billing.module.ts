import { Module } from '@nestjs/common';
import { PlansModule } from './plans/plans.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { PaymentsModule } from './payments/payments.module';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [PlansModule, SubscriptionsModule, PaymentsModule, InvoicesModule],
})
export class BillingModule {}
