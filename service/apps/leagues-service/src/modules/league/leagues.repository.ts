import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '../../../prisma/generated/league-client';

@Injectable()
export class LeaguesRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.LeagueCreateInput) {
    return this.prisma.league.create({ data });
  }

  findAll(where: Prisma.LeagueWhereInput) {
    return this.prisma.league.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  findById(id: string) {
    return this.prisma.league.findUnique({
      where: { id },
    });
  }

  update(id: string, data: Prisma.LeagueUpdateInput) {
    return this.prisma.league.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.league.delete({
      where: { id },
    });
  }
}
