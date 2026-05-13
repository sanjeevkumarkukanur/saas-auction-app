import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, TeamOwner } from '@prisma/teams-client';
import { TeamOwnerFilterDto } from '@libs/common';

@Injectable()
export class TeamOwnerRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.TeamOwnerUncheckedCreateInput) {
    return this.prisma.teamOwner.create({ data });
  }

  findAll(filter: TeamOwnerFilterDto): Promise<TeamOwner[]> {
    return this.prisma.teamOwner.findMany({
      where: {
        ...(filter.tenantId && { tenantId: filter.tenantId }),
        ...(filter.teamId && { teamId: filter.teamId }),
        ...(filter.seasonTeamId && {
          seasonTeamId: filter.seasonTeamId,
        }),
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  findById(id: string): Promise<TeamOwner | null> {
    return this.prisma.teamOwner.findUnique({
      where: { id },
    });
  }

  update(id: string, data: Prisma.TeamOwnerUncheckedUpdateInput) {
    return this.prisma.teamOwner.update({
      where: { id },
      data,
    });
  }

  // ✅ FIX ADDED
  updateMany(params: Prisma.TeamOwnerUpdateManyArgs) {
    return this.prisma.teamOwner.updateMany(params);
  }
}
