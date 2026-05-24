import { Module } from '@nestjs/common';
import { SubscriptionsController } from './subscriptions.controller';
import { SubscriptionsProxy } from './subscriptions.proxy';
import { BillingClientModule } from '../billing-client.module';

@Module({
  imports: [BillingClientModule],
  controllers: [SubscriptionsController],
  providers: [SubscriptionsProxy],
  exports: [SubscriptionsProxy],
})
export class SubscriptionsModule {}
