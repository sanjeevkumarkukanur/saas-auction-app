import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Permission } from '@libs/auth';

@Injectable()
export class PermissionsRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: { key: string; name: string; pageId: string }) {
    return this.prisma.permission.create({ data });
  }

  findAll(): Promise<Permission[]> {
    return this.prisma.permission.findMany();
  }

  findByKey(key: string): Promise<Permission> {
    return this.prisma.permission.findUnique({
      where: { key },
    });
  }

  findById(id: string): Promise<Permission> {
    return this.prisma.permission.findUnique({
      where: { id },
    });
  }
}
