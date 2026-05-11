import { Injectable } from '@nestjs/common';
import {
  InvoiceStatus,
  Prisma,
} from '../../../prisma/generated/billing-client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class InvoicesRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.InvoiceUncheckedCreateInput) {
    return this.prisma.invoice.create({
      data,
      include: {
        subscription: true,
        payments: true,
      },
    });
  }

  findAll() {
    return this.prisma.invoice.findMany({
      include: {
        subscription: true,
        payments: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findById(id: string) {
    return this.prisma.invoice.findUnique({
      where: { id },
      include: {
        subscription: true,
        payments: true,
      },
    });
  }

  findBySubscriptionId(subscriptionId: string) {
    return this.prisma.invoice.findMany({
      where: { subscriptionId },
      include: {
        subscription: true,
        payments: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  update(id: string, data: Prisma.InvoiceUncheckedUpdateInput) {
    return this.prisma.invoice.update({
      where: { id },
      data,
      include: {
        subscription: true,
        payments: true,
      },
    });
  }

  updateStatus(id: string, status: InvoiceStatus) {
    return this.prisma.invoice.update({
      where: { id },
      data: { status },
      include: {
        subscription: true,
        payments: true,
      },
    });
  }

  delete(id: string) {
    return this.prisma.invoice.delete({
      where: { id },
    });
  }
}
