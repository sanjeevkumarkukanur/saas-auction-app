import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePlayerGameDto, UpdatePlayerGameDto } from '@app/common';

@Injectable()
export class PlayerGameRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreatePlayerGameDto) {
    return this.prisma.playerGameProfile.create({ data });
  }

  findByPlayer(playerId: string) {
    return this.prisma.playerGameProfile.findMany({
      where: { playerId },
    });
  }

  findOne(playerId: string, gameId: string) {
    return this.prisma.playerGameProfile.findFirst({
      where: { playerId, gameId },
    });
  }

  update(id: string, data: UpdatePlayerGameDto) {
    return this.prisma.playerGameProfile.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.playerGameProfile.delete({
      where: { id },
    });
  }
}
