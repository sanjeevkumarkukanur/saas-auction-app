import { Injectable } from '@nestjs/common';
import {
  Prisma,
  SubscriptionStatus,
} from '../../../prisma/generated/billing-client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SubscriptionsRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.SubscriptionCreateInput) {
    return this.prisma.subscription.create({
      data,
      include: {
        plan: true,
        invoices: true,
      },
    });
  }

  findAll() {
    return this.prisma.subscription.findMany({
      include: {
        plan: true,
        invoices: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findById(id: string) {
    return this.prisma.subscription.findUnique({
      where: { id },
      include: {
        plan: true,
        invoices: true,
      },
    });
  }

  findByTenantId(tenantId: string) {
    return this.prisma.subscription.findMany({
      where: { tenantId },
      include: {
        plan: true,
        invoices: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findActiveByTenantId(tenantId: string) {
    return this.prisma.subscription.findFirst({
      where: {
        tenantId,
        status: {
          in: ['active', 'trialing'],
        },
      },
      include: {
        plan: true,
        invoices: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  update(id: string, data: Prisma.SubscriptionUpdateInput) {
    return this.prisma.subscription.update({
      where: { id },
      data,
      include: {
        plan: true,
        invoices: true,
      },
    });
  }

  updateStatus(id: string, status: SubscriptionStatus) {
    return this.prisma.subscription.update({
      where: { id },
      data: { status },
      include: {
        plan: true,
        invoices: true,
      },
    });
  }

  delete(id: string) {
    return this.prisma.subscription.delete({
      where: { id },
    });
  }
}
