import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { TournamentStatus } from '@libs/common';

@Injectable()
export class TournamentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: {
    name: string;
    seasonId: string;
    status?: TournamentStatus;
    startDate?: Date;
    endDate?: Date;
  }) {
    return this.prisma.tournament.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.tournament.findMany({
      include: {
        config: true,
        stages: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.tournament.findUnique({
      where: { id },
      include: {
        config: true,
        stages: {
          include: {
            groups: true,
          },
        },
      },
    });
  }

  async update(
    id: string,
    data: {
      name?: string;
      status?: TournamentStatus;
      startDate?: Date;
      endDate?: Date;
    },
  ) {
    return this.prisma.tournament.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.tournament.delete({
      where: { id },
    });
  }
}
