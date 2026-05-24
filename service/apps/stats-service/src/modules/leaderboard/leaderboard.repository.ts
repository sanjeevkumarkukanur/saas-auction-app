import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LeaderboardRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getSeasonStats(seasonId: string) {
    return this.prisma.seasonTeamStats.findMany({
      where: { seasonId },
    });
  }

  async saveLeaderboard(tournamentId: string, payload: any) {
    return this.prisma.leaderboardCache.upsert({
      where: { tournamentId },
      update: { payload },
      create: { tournamentId, payload },
    });
  }

  async getLeaderboard(tournamentId: string) {
    return this.prisma.leaderboardCache.findUnique({
      where: { tournamentId },
    });
  }
}
