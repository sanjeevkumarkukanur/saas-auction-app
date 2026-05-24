import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TeamStatsRepository {
  constructor(private readonly prisma: PrismaService) {}

  findBySeasonAndTeam(seasonId: string, teamId: string) {
    return this.prisma.seasonTeamStats.findUnique({
      where: {
        seasonId_teamId: {
          seasonId,
          teamId,
        },
      },
    });
  }

  create(data: { seasonId: string; tournamentId: string; teamId: string }) {
    return this.prisma.seasonTeamStats.create({ data });
  }

  update(id: string, data: any) {
    return this.prisma.seasonTeamStats.update({
      where: { id },
      data,
    });
  }

  getAllBySeason(seasonId: string) {
    return this.prisma.seasonTeamStats.findMany({
      where: { seasonId },
    });
  }
}
