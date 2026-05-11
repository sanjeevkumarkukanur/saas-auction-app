import { Injectable, NotFoundException } from '@nestjs/common';
import { PaymentsRepository } from './payments.repository';
import {
  ChangePaymentStatusDto,
  CreatePaymentDto,
  UpdatePaymentDto,
} from '@libs/common';

@Injectable()
export class PaymentsService {
  constructor(private readonly paymentsRepository: PaymentsRepository) {}

  async create(dto: CreatePaymentDto) {
    return this.paymentsRepository.create({
      invoiceId: dto.invoiceId,
      amount: dto.amount,
      currency: dto.currency,
      status: dto.status,
      provider: dto.provider,
      providerRefId: dto.providerRefId,
    });
  }

  async findAll() {
    return this.paymentsRepository.findAll();
  }

  async findOne(id: string) {
    const payment = await this.paymentsRepository.findById(id);

    if (!payment) {
      throw new NotFoundException('Payment not found');
    }

    return payment;
  }

  async findByInvoiceId(invoiceId: string) {
    return this.paymentsRepository.findByInvoiceId(invoiceId);
  }

  async update(id: string, dto: UpdatePaymentDto) {
    await this.findOne(id);

    return this.paymentsRepository.update(id, {
      invoiceId: dto.invoiceId,
      amount: dto.amount,
      currency: dto.currency,
      status: dto.status,
      provider: dto.provider,
      providerRefId: dto.providerRefId,
    });
  }

  async changeStatus(id: string, dto: ChangePaymentStatusDto) {
    await this.findOne(id);
    return this.paymentsRepository.updateStatus(id, dto.status);
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.paymentsRepository.delete(id);
  }
}
