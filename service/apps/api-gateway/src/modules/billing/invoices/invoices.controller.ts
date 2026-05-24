import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { InvoicesProxy } from './invoices.proxy';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesProxy: InvoicesProxy) {}

  @Post()
  create(@Body() body: any) {
    return this.invoicesProxy.createInvoice(body);
  }

  @Get()
  findAll() {
    return this.invoicesProxy.getAllInvoices();
  }

  @Get('subscription/:subscriptionId')
  findBySubscriptionId(@Param('subscriptionId') subscriptionId: string) {
    return this.invoicesProxy.getInvoicesBySubscriptionId(subscriptionId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoicesProxy.getInvoiceById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.invoicesProxy.updateInvoice(id, body);
  }

  @Patch(':id/status')
  changeStatus(@Param('id') id: string, @Body() body: any) {
    return this.invoicesProxy.changeInvoiceStatus(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invoicesProxy.deleteInvoice(id);
  }
}
