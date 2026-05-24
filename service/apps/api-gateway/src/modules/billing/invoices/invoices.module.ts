import { Module } from '@nestjs/common';
import { InvoicesController } from './invoices.controller';
import { InvoicesProxy } from './invoices.proxy';
import { BillingClientModule } from '@libs/common';

@Module({
  imports: [BillingClientModule],
  controllers: [InvoicesController],
  providers: [InvoicesProxy],
  exports: [InvoicesProxy],
})
export class InvoicesModule {}
