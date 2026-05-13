import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  CreateSeasonTeamDto,
  UpdateSeasonTeamDto,
  SeasonTeamFilterDto,
} from '@libs/common';

@Injectable()
export class SeasonTeamRepository {
  constructor(private readonly prisma: PrismaService) {}

  // create(data: CreateSeasonTeamDto) {
  //   return this.prisma.seasonTeam.create({ data });
  // }
  create(data: CreateSeasonTeamDto) {
    return this.prisma.seasonTeam.create({
      data: {
        ...data,
        purseLimit: data.purseLimit,
      },
    });
  }

  findAll(filter: SeasonTeamFilterDto) {
    return this.prisma.seasonTeam.findMany({
      where: {
        ...(filter.tenantId && {
          tenantId: filter.tenantId,
        }),
        ...(filter.seasonId && {
          seasonId: filter.seasonId,
        }),
        ...(filter.search && {
          displayName: {
            contains: filter.search,
            mode: 'insensitive',
          },
        }),
      },
    });
  }

  findById(id: string) {
    return this.prisma.seasonTeam.findUnique({
      where: { id },
    });
  }

  update(id: string, data: UpdateSeasonTeamDto) {
    return this.prisma.seasonTeam.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.seasonTeam.delete({
      where: { id },
    });
  }
}
