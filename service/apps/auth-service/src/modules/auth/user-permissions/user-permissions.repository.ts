import { Injectable } from '@nestjs/common';
import { PrismaService } from 'apps/auth-service/src/prisma/prisma.service';

@Injectable()
export class UserPermissionsRepository {
  constructor(private readonly prisma: PrismaService) {}

  upsertUserPermission(data: {
    userId: string;
    permissionId: string;
    allowed: boolean;
  }) {
    const { userId, permissionId, allowed } = data;

    return this.prisma.userPermission.upsert({
      where: {
        userId_permissionId: {
          userId,
          permissionId,
        },
      },
      update: {
        allowed,
      },
      create: {
        userId,
        permissionId,
        allowed,
      },
    });
  }

  deleteUserPermission(userId: string, permissionId: string) {
    return this.prisma.userPermission.delete({
      where: {
        userId_permissionId: {
          userId,
          permissionId,
        },
      },
    });
  }

  findByUser(userId: string) {
    return this.prisma.userPermission.findMany({
      where: { userId },
      orderBy: {
        permissionId: 'asc',
      },
    });
  }

  findOne(userId: string, permissionId: string) {
    return this.prisma.userPermission.findUnique({
      where: {
        userId_permissionId: {
          userId,
          permissionId,
        },
      },
    });
  }
}
