import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsProxy } from './payments.proxy';
import { BillingClientModule } from '@libs/common';

@Module({
  imports: [BillingClientModule],
  controllers: [PaymentsController],
  providers: [PaymentsProxy],
  exports: [PaymentsProxy],
})
export class PaymentsModule {}
