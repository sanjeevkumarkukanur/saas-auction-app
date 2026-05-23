import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePlayerLeagueDto } from '@app/common';

@Injectable()
export class PlayerLeagueRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreatePlayerLeagueDto) {
    return this.prisma.playerLeague.create({ data });
  }

  findByPlayer(playerId: string) {
    return this.prisma.playerLeague.findMany({
      where: { playerId },
    });
  }

  findOne(playerId: string, leagueId: string) {
    return this.prisma.playerLeague.findUnique({
      where: {
        playerId_leagueId: {
          playerId,
          leagueId,
        },
      },
    });
  }

  delete(id: string) {
    return this.prisma.playerLeague.delete({
      where: { id },
    });
  }
}
