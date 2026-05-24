import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FixtureRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: {
    stageId?: string;
    groupId?: string;
    homeTeamId: string;
    awayTeamId: string;
    round: number;
    matchNo: number;
  }) {
    return this.prisma.fixture.create({
      data,
    });
  }

  createMany(data: any[]) {
    return this.prisma.fixture.createMany({
      data,
    });
  }

  findByStage(stageId: string) {
    return this.prisma.fixture.findMany({
      where: { stageId },
      orderBy: { matchNo: 'asc' },
    });
  }

  findByGroup(groupId: string) {
    return this.prisma.fixture.findMany({
      where: { groupId },
      orderBy: { matchNo: 'asc' },
    });
  }

  deleteByStage(stageId: string) {
    return this.prisma.fixture.deleteMany({
      where: { stageId },
    });
  }
}
