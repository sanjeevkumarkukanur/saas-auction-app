import { Injectable } from '@nestjs/common';
import {
  Prisma,
  PaymentStatus,
} from '../../../prisma/generated/billing-client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PaymentsRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.PaymentUncheckedCreateInput) {
    return this.prisma.payment.create({
      data,
      include: {
        invoice: true,
      },
    });
  }

  findAll() {
    return this.prisma.payment.findMany({
      include: {
        invoice: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findById(id: string) {
    return this.prisma.payment.findUnique({
      where: { id },
      include: {
        invoice: true,
      },
    });
  }

  findByInvoiceId(invoiceId: string) {
    return this.prisma.payment.findMany({
      where: { invoiceId },
      include: {
        invoice: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  update(id: string, data: Prisma.PaymentUncheckedUpdateInput) {
    return this.prisma.payment.update({
      where: { id },
      data,
      include: {
        invoice: true,
      },
    });
  }

  updateStatus(id: string, status: PaymentStatus) {
    return this.prisma.payment.update({
      where: { id },
      data: { status },
      include: {
        invoice: true,
      },
    });
  }

  delete(id: string) {
    return this.prisma.payment.delete({
      where: { id },
    });
  }
}
