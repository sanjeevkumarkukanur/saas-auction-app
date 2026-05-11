import { Injectable, NotFoundException } from '@nestjs/common';
import { InvoicesRepository } from './invoices.repository';
import {
  ChangeInvoiceStatusDto,
  CreateInvoiceDto,
  UpdateInvoiceDto,
} from '@libs/common';

@Injectable()
export class InvoicesService {
  constructor(private readonly invoicesRepository: InvoicesRepository) {}

  async create(dto: CreateInvoiceDto) {
    return this.invoicesRepository.create({
      subscriptionId: dto.subscriptionId,
      amount: dto.amount,
      currency: dto.currency,
      status: dto.status,
      invoiceNumber: dto.invoiceNumber,
      hostedUrl: dto.hostedUrl,
    });
  }

  async findAll() {
    return this.invoicesRepository.findAll();
  }

  async findOne(id: string) {
    const invoice = await this.invoicesRepository.findById(id);

    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }

    return invoice;
  }

  async findBySubscriptionId(subscriptionId: string) {
    return this.invoicesRepository.findBySubscriptionId(subscriptionId);
  }

  async update(id: string, dto: UpdateInvoiceDto) {
    await this.findOne(id);

    return this.invoicesRepository.update(id, {
      subscriptionId: dto.subscriptionId,
      amount: dto.amount,
      currency: dto.currency,
      status: dto.status,
      invoiceNumber: dto.invoiceNumber,
      hostedUrl: dto.hostedUrl,
    });
  }

  async changeStatus(id: string, dto: ChangeInvoiceStatusDto) {
    await this.findOne(id);
    return this.invoicesRepository.updateStatus(id, dto.status);
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.invoicesRepository.delete(id);
  }
}
