import { Injectable } from '@nestjs/common';
import {
  PrismaClient,
  Prisma,
} from '../../../prisma/generated/tournament-client';

@Injectable()
export class ConfigRepository {
  private prisma = new PrismaClient();

  create(data: Prisma.TournamentConfigCreateInput) {
    return this.prisma.tournamentConfig.create({
      data,
    });
  }

  findByTournament(tournamentId: string) {
    return this.prisma.tournamentConfig.findUnique({
      where: { tournamentId },
    });
  }

  update(tournamentId: string, data: Prisma.TournamentConfigUpdateInput) {
    return this.prisma.tournamentConfig.update({
      where: { tournamentId },
      data,
    });
  }

  delete(tournamentId: string) {
    return this.prisma.tournamentConfig.delete({
      where: { tournamentId },
    });
  }
}
