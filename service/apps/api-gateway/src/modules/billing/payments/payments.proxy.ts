import { CreatePaymentDto, UpdatePaymentDto } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PaymentsProxy {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientProxy,
  ) {}

  createPayment(payload: CreatePaymentDto) {
    return this.billingClient.send({ cmd: 'create_payment' }, payload);
  }

  getAllPayments() {
    return this.billingClient.send({ cmd: 'get_all_payments' }, {});
  }

  getPaymentById(id: string) {
    return this.billingClient.send({ cmd: 'get_payment_by_id' }, id);
  }

  getPaymentsByInvoiceId(invoiceId: string) {
    return this.billingClient.send(
      { cmd: 'get_payments_by_invoice_id' },
      invoiceId,
    );
  }

  updatePayment(id: string, dto: UpdatePaymentDto) {
    return this.billingClient.send({ cmd: 'update_payment' }, { id, dto });
  }

  changePaymentStatus(id: string, dto: UpdatePaymentDto) {
    return this.billingClient.send(
      { cmd: 'change_payment_status' },
      { id, dto },
    );
  }

  deletePayment(id: string) {
    return this.billingClient.send({ cmd: 'delete_payment' }, id);
  }
}
