import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PlayerSeasonRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.playerSeason.create({ data });
  }

  findOne(playerId: string, seasonId: string, leagueId: string) {
    return this.prisma.playerSeason.findUnique({
      where: {
        playerId_seasonId_leagueId: {
          playerId,
          seasonId,
          leagueId,
        },
      },
    });
  }

  findBySeason(seasonId: string) {
    return this.prisma.playerSeason.findMany({
      where: { seasonId },
      include: { player: true, team: true },
    });
  }

  update(id: string, data: any) {
    return this.prisma.playerSeason.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.playerSeason.delete({
      where: { id },
    });
  }
}
