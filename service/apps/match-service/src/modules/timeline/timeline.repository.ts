import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TimelineRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.matchTimeline.create({ data });
  }

  findByMatch(matchId: string) {
    return this.prisma.matchTimeline.findMany({
      where: { matchId },
      orderBy: { createdAt: 'asc' },
    });
  }

  deleteByMatch(matchId: string) {
    return this.prisma.matchTimeline.deleteMany({
      where: { matchId },
    });
  }
}
