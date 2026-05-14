import { Injectable } from '@nestjs/common';
import { TenantGameFilterDto, UpdateTenantGameDto } from '@libs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TenantGameRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: { tenantId: string; gameId: string }) {
    return this.prisma.tenantGame.create({ data });
  }

  findAll(filter: TenantGameFilterDto) {
    return this.prisma.tenantGame.findMany({
      where: {
        ...(filter.tenantId && { tenantId: filter.tenantId }),
        ...(filter.isActive !== undefined && { isActive: filter.isActive }),
      },
      include: {
        game: true,
      },
    });
  }
  findOne(filter: TenantGameFilterDto) {
    return this.prisma.tenantGame.findFirst({
      where: {
        ...(filter.tenantId && { tenantId: filter.tenantId }),
        ...(filter.isActive !== undefined && { isActive: filter.isActive }),
      },
      include: {
        game: true,
      },
    });
  }

  findById(id: string) {
    return this.prisma.tenantGame.findUnique({
      where: { id },
      include: {
        game: true,
      },
    });
  }

  findByTenantGame(tenantId: string, gameId: string) {
    return this.prisma.tenantGame.findUnique({
      where: {
        tenantId_gameId: {
          tenantId,
          gameId,
        },
      },
    });
  }

  update(id: string, data: UpdateTenantGameDto) {
    return this.prisma.tenantGame.update({
      where: { id },
      data,
    });
  }
}
