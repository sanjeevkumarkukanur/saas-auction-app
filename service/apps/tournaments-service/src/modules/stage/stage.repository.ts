import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class StageRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: {
    name: string;
    type: string;
    order: number;
    tournamentId: string;
  }) {
    return this.prisma.stage.create({
      data: {
        name: data.name,
        type: data.type,
        order: data.order,
        tournament: {
          connect: { id: data.tournamentId },
        },
      },
    });
  }

  findByTournament(tournamentId: string) {
    return this.prisma.stage.findMany({
      where: { tournamentId },
      include: {
        groups: true,
        fixtures: true,
      },
      orderBy: {
        order: 'asc',
      },
    });
  }

  findById(id: string) {
    return this.prisma.stage.findUnique({
      where: { id },
      include: {
        groups: true,
        fixtures: true,
      },
    });
  }

  update(id: string, data: any) {
    return this.prisma.stage.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.stage.delete({
      where: { id },
    });
  }
}
