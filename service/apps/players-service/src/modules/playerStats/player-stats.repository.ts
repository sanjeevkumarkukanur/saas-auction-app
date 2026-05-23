import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PlayerStatsRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.playerStats.create({ data });
  }

  findOne(playerSeasonId: string, gameId: string) {
    return this.prisma.playerStats.findUnique({
      where: {
        playerSeasonId_gameId: {
          playerSeasonId,
          gameId,
        },
      },
    });
  }

  findByPlayerSeason(playerSeasonId: string) {
    return this.prisma.playerStats.findMany({
      where: { playerSeasonId },
    });
  }

  update(id: string, data: any) {
    return this.prisma.playerStats.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.playerStats.delete({
      where: { id },
    });
  }
}
