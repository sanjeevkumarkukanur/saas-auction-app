import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTenantPlayerDto, UpdateTenantPlayerDto } from '@app/common';

@Injectable()
export class TenantPlayerRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateTenantPlayerDto) {
    return this.prisma.tenantPlayer.create({ data });
  }

  findByTenant(tenantId: string) {
    return this.prisma.tenantPlayer.findMany({
      where: { tenantId },
      include: { player: true },
    });
  }

  findOne(tenantId: string, playerId: string) {
    return this.prisma.tenantPlayer.findUnique({
      where: {
        tenantId_playerId: {
          tenantId,
          playerId,
        },
      },
    });
  }

  update(id: string, data: UpdateTenantPlayerDto) {
    return this.prisma.tenantPlayer.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.tenantPlayer.delete({
      where: { id },
    });
  }
}
