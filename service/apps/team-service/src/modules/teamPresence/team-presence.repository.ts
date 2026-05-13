import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, TeamPresence } from '@prisma/teams-client';
import { PresenceFilterDto } from '@libs/common';

@Injectable()
export class TeamPresenceRepository {
  constructor(private readonly prisma: PrismaService) {}

  upsert(data: Prisma.TeamPresenceUncheckedCreateInput) {
    return this.prisma.teamPresence.upsert({
      where: { seasonTeamId: data.seasonTeamId },
      update: data,
      create: data,
    });
  }

  findAll(filter: PresenceFilterDto): Promise<TeamPresence[]> {
    return this.prisma.teamPresence.findMany({
      where: {
        ...(filter.tenantId && { tenantId: filter.tenantId }),
        ...(filter.seasonTeamId && {
          seasonTeamId: filter.seasonTeamId,
        }),
      },
    });
  }

  findBySeasonTeamId(seasonTeamId: string) {
    return this.prisma.teamPresence.findUnique({
      where: { seasonTeamId },
    });
  }
}
