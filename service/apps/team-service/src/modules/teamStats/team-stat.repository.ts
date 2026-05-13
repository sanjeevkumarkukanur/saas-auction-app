import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, TeamStat } from '@prisma/teams-client';
import { TeamStatFilterDto } from '@libs/common';

@Injectable()
export class TeamStatRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.TeamStatUncheckedCreateInput) {
    return this.prisma.teamStat.create({ data });
  }

  findAll(filter: TeamStatFilterDto): Promise<TeamStat[]> {
    return this.prisma.teamStat.findMany({
      where: {
        ...(filter.tenantId && { tenantId: filter.tenantId }),
        ...(filter.seasonTeamId && {
          seasonTeamId: filter.seasonTeamId,
        }),
      },
      orderBy: { totalSpent: 'desc' }, // leaderboard
    });
  }

  findBySeasonTeamId(seasonTeamId: string): Promise<TeamStat | null> {
    return this.prisma.teamStat.findUnique({
      where: { seasonTeamId },
    });
  }

  update(seasonTeamId: string, data: Prisma.TeamStatUncheckedUpdateInput) {
    return this.prisma.teamStat.update({
      where: { seasonTeamId },
      data,
    });
  }
}
