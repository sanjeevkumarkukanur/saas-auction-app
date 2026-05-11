import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { InvoicesService } from './invoices.service';
import {
  ChangeInvoiceStatusDto,
  CreateInvoiceDto,
  UpdateInvoiceDto,
} from '@libs/common';

@Controller()
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @MessagePattern({ cmd: 'create_invoice' })
  create(@Payload() dto: CreateInvoiceDto) {
    return this.invoicesService.create(dto);
  }

  @MessagePattern({ cmd: 'get_all_invoices' })
  findAll() {
    return this.invoicesService.findAll();
  }

  @MessagePattern({ cmd: 'get_invoice_by_id' })
  findOne(@Payload() id: string) {
    return this.invoicesService.findOne(id);
  }

  @MessagePattern({ cmd: 'get_invoices_by_subscription_id' })
  findBySubscriptionId(@Payload() subscriptionId: string) {
    return this.invoicesService.findBySubscriptionId(subscriptionId);
  }

  @MessagePattern({ cmd: 'update_invoice' })
  update(@Payload() payload: { id: string; dto: UpdateInvoiceDto }) {
    return this.invoicesService.update(payload.id, payload.dto);
  }

  @MessagePattern({ cmd: 'change_invoice_status' })
  changeStatus(
    @Payload() payload: { id: string; dto: ChangeInvoiceStatusDto },
  ) {
    return this.invoicesService.changeStatus(payload.id, payload.dto);
  }

  @MessagePattern({ cmd: 'delete_invoice' })
  remove(@Payload() id: string) {
    return this.invoicesService.remove(id);
  }
}
