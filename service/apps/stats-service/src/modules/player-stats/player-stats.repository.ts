import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlayerStatsRepository {
  constructor(private readonly prisma: PrismaService) {}

  findBySeasonAndPlayer(seasonId: string, playerId: string) {
    return this.prisma.playerStats.findUnique({
      where: {
        seasonId_playerId: {
          seasonId,
          playerId,
        },
      },
    });
  }

  create(data: { seasonId: string; playerId: string; teamId: string }) {
    return this.prisma.playerStats.create({ data });
  }

  update(id: string, data: any) {
    return this.prisma.playerStats.update({
      where: { id },
      data,
    });
  }

  getTopRunScorers(seasonId: string, limit = 5) {
    return this.prisma.playerStats.findMany({
      where: { seasonId },
      orderBy: { totalRuns: 'desc' },
      take: limit,
    });
  }

  getTopWicketTakers(seasonId: string, limit = 5) {
    return this.prisma.playerStats.findMany({
      where: { seasonId },
      orderBy: { totalWickets: 'desc' },
      take: limit,
    });
  }
}
