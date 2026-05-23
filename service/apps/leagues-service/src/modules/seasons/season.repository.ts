import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, SeasonStatus } from '../../../prisma/generated/league-client';

@Injectable()
export class SeasonRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.SeasonCreateInput) {
    return this.prisma.season.create({ data });
  }

  findById(id: string) {
    return this.prisma.season.findUnique({
      where: { id },
    });
  }

  findAll(filter: { leagueId?: string; status?: SeasonStatus }) {
    return this.prisma.season.findMany({
      where: {
        leagueId: filter.leagueId,
        status: filter.status,
      },
      orderBy: { createdAt: 'desc' },
    });
  }
  findByLeagueAndYear(leagueId: string, year: number) {
    return this.prisma.season.findFirst({
      where: {
        leagueId,
        year,
      },
    });
  }

  update(id: string, data: Prisma.SeasonUpdateInput) {
    return this.prisma.season.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.season.delete({
      where: { id },
    });
  }

  findLeagueById(id: string) {
    return this.prisma.league.findUnique({
      where: { id },
    });
  }
  deactivateAll(leagueId: string) {
    return this.prisma.season.updateMany({
      where: { leagueId },
      data: { isActive: false },
    });
  }
}
