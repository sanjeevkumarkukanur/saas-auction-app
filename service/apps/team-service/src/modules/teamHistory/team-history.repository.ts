import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, TeamHistory } from '@prisma/teams-client';
import { TeamHistoryFilterDto } from '@libs/common';

@Injectable()
export class TeamHistoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.TeamHistoryUncheckedCreateInput) {
    return this.prisma.teamHistory.create({ data });
  }

  findAll(filter: TeamHistoryFilterDto): Promise<TeamHistory[]> {
    return this.prisma.teamHistory.findMany({
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

  findByTeam(teamId: string) {
    return this.prisma.teamHistory.findMany({
      where: { teamId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
