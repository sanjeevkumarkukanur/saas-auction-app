import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PaymentsService } from './payments.service';
import {
  ChangePaymentStatusDto,
  CreatePaymentDto,
  UpdatePaymentDto,
} from '@libs/common';

@Controller()
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @MessagePattern({ cmd: 'create_payment' })
  create(@Payload() dto: CreatePaymentDto) {
    return this.paymentsService.create(dto);
  }

  @MessagePattern({ cmd: 'get_all_payments' })
  findAll() {
    return this.paymentsService.findAll();
  }

  @MessagePattern({ cmd: 'get_payment_by_id' })
  findOne(@Payload() id: string) {
    return this.paymentsService.findOne(id);
  }

  @MessagePattern({ cmd: 'get_payments_by_invoice_id' })
  findByInvoiceId(@Payload() invoiceId: string) {
    return this.paymentsService.findByInvoiceId(invoiceId);
  }

  @MessagePattern({ cmd: 'update_payment' })
  update(@Payload() payload: { id: string; dto: UpdatePaymentDto }) {
    return this.paymentsService.update(payload.id, payload.dto);
  }

  @MessagePattern({ cmd: 'change_payment_status' })
  changeStatus(
    @Payload() payload: { id: string; dto: ChangePaymentStatusDto },
  ) {
    return this.paymentsService.changeStatus(payload.id, payload.dto);
  }

  @MessagePattern({ cmd: 'delete_payment' })
  remove(@Payload() id: string) {
    return this.paymentsService.remove(id);
  }
}
