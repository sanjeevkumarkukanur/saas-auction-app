import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PaymentsProxy } from './payments.proxy';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsProxy: PaymentsProxy) {}

  @Post()
  create(@Body() body: any) {
    return this.paymentsProxy.createPayment(body);
  }

  @Get()
  findAll() {
    return this.paymentsProxy.getAllPayments();
  }

  @Get('invoice/:invoiceId')
  findByInvoiceId(@Param('invoiceId') invoiceId: string) {
    return this.paymentsProxy.getPaymentsByInvoiceId(invoiceId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentsProxy.getPaymentById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.paymentsProxy.updatePayment(id, body);
  }

  @Patch(':id/status')
  changeStatus(@Param('id') id: string, @Body() body: any) {
    return this.paymentsProxy.changePaymentStatus(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentsProxy.deletePayment(id);
  }
}
