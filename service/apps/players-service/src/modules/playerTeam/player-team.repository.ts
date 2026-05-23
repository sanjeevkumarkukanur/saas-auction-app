import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PlayerTeamRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.playerTeam.create({ data });
  }

  findByPlayerSeason(playerSeasonId: string) {
    return this.prisma.playerTeam.findUnique({
      where: { playerSeasonId },
    });
  }

  update(id: string, data: any) {
    return this.prisma.playerTeam.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.playerTeam.delete({
      where: { id },
    });
  }
}
