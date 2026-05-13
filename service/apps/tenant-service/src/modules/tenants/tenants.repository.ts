import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/tenant-client';

@Injectable()
export class TenantRepository {
  constructor(private readonly prisma: PrismaService) {}

  getAllTenants() {
    return this.prisma.tenant.findMany();
  }

  getTenantById(tenantId: string) {
    return this.prisma.tenant.findUnique({
      where: { id: tenantId },
    });
  }

  createTenant(data: {
    name: string;
    email: string;
    planId?: string;
    phone?: string;
    website?: string;
    address?: string;
    city?: string;
    country?: string;
  }) {
    return this.prisma.tenant.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        website: data.website,
        address: data.address,
        city: data.city,
        country: data.country,
        planId: data.planId,
      },
    });
  }

  updateTenantPlan(tenantId: string, planId: string) {
    return this.prisma.tenant.update({
      where: { id: tenantId },
      data: { planId },
    });
  }

  createTenantPage(data: { tenantId: string; pageKey: string; name: string }) {
    return this.prisma.tenantPage.create({ data });
  }

  tenantHasPage(tenantId: string, pageKey: string) {
    return this.prisma.tenantPage
      .findFirst({
        where: { tenantId, pageKey },
      })
      .then(Boolean);
  }

  getTenantPages(tenantId: string) {
    return this.prisma.tenantPage.findMany({
      where: { tenantId },
      include: {
        sections: {
          orderBy: { order: 'asc' },
          include: {
            fields: {
              orderBy: { order: 'asc' },
            },
          },
        },
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  createTenantSection(data: {
    tenantPageId: string;
    key: string;
    title: string;
    order: number;
    layoutJson: Prisma.InputJsonValue;
    stylesJson: Prisma.InputJsonValue;
  }) {
    return this.prisma.tenantSection.create({ data });
  }

  createTenantField(data: {
    tenantSectionId: string;
    key: string;
    label: string;
    type: string;
    order: number;
    uiJson: Prisma.InputJsonValue;
    stylesJson: Prisma.InputJsonValue;
    validationJson: Prisma.InputJsonValue;
  }) {
    return this.prisma.tenantField.create({ data });
  }

  assignPermissionsToRole(roleId: string, permissionIds: string[]) {
    if (permissionIds.length === 0) return Promise.resolve();

    return this.prisma.rolePermission.createMany({
      data: permissionIds.map((permissionId) => ({
        roleId,
        permissionId,
      })),
      skipDuplicates: true,
    });
  }
}
