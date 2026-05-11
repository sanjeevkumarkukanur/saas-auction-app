import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RolesRepository {
  constructor(private readonly prisma: PrismaService) {}

  createRole(data: { name: string; tenantId: string }) {
    return this.prisma.role.create({ data });
  }

  findById(id: string) {
    return this.prisma.role.findUnique({
      where: { id },
      include: {
        rolePermissions: true,
      },
    });
  }

  addPermissionToRole(roleId: string, permissionId: string) {
    return this.prisma.rolePermission.create({
      data: {
        roleId,
        permissionId,
      },
    });
  }

  getRolesByTenant(tenantId: string) {
    return this.prisma.role.findMany({
      where: { tenantId },
      include: {
        rolePermissions: true,
      },
    });
  }
}
