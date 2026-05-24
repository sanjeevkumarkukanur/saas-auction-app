import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StandingsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findTeamStats(seasonId: string, teamId: string) {
    return this.prisma.seasonTeamStats.findUnique({
      where: {
        seasonId_teamId: {
          seasonId,
          teamId,
        },
      },
    });
  }

  async createTeamStats(data: any) {
    return this.prisma.seasonTeamStats.create({ data });
  }

  async updateTeamStats(id: string, data: any) {
    return this.prisma.seasonTeamStats.update({
      where: { id },
      data,
    });
  }

  async getStandings(seasonId: string) {
    return this.prisma.seasonTeamStats.findMany({
      where: { seasonId },
      orderBy: [
        { points: 'desc' },
        { netRunRate: 'desc' },
        { runsScored: 'desc' },
      ],
    });
  }
}
