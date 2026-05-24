import { CreateInvoiceDto, UpdateInvoiceDto } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class InvoicesProxy {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientProxy,
  ) {}

  createInvoice(payload: CreateInvoiceDto) {
    return this.billingClient.send({ cmd: 'create_invoice' }, payload);
  }

  getAllInvoices() {
    return this.billingClient.send({ cmd: 'get_all_invoices' }, {});
  }

  getInvoiceById(id: string) {
    return this.billingClient.send({ cmd: 'get_invoice_by_id' }, id);
  }

  getInvoicesBySubscriptionId(subscriptionId: string) {
    return this.billingClient.send(
      { cmd: 'get_invoices_by_subscription_id' },
      subscriptionId,
    );
  }

  updateInvoice(id: string, dto: UpdateInvoiceDto) {
    return this.billingClient.send({ cmd: 'update_invoice' }, { id, dto });
  }

  changeInvoiceStatus(id: string, dto: UpdateInvoiceDto) {
    return this.billingClient.send(
      { cmd: 'change_invoice_status' },
      { id, dto },
    );
  }

  deleteInvoice(id: string) {
    return this.billingClient.send({ cmd: 'delete_invoice' }, id);
  }
}
