import { Module } from '@nestjs/common';
import { PlansController } from './plans.controller';
import { PlansProxy } from './plans.proxy';
import { BillingClientModule } from '@libs/common';

@Module({
  imports: [BillingClientModule],
  controllers: [PlansController],
  providers: [PlansProxy],
  exports: [PlansProxy],
})
export class PlansModule {}
