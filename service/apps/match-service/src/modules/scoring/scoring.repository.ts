import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ScoringRepository {
  constructor(private readonly prisma: PrismaService) {}

  findScore(matchId: string, teamId: string) {
    return this.prisma.teamScore.findUnique({
      where: {
        matchId_teamId: {
          matchId,
          teamId,
        },
      },
    });
  }

  createScore(data: any) {
    return this.prisma.teamScore.create({ data });
  }

  updateScore(matchId: string, teamId: string, data: any) {
    return this.prisma.teamScore.update({
      where: {
        matchId_teamId: {
          matchId,
          teamId,
        },
      },
      data,
    });
  }

  approveScore(matchId: string, teamId: string) {
    return this.prisma.teamScore.update({
      where: {
        matchId_teamId: {
          matchId,
          teamId,
        },
      },
      data: {
        isApproved: true,
      },
    });
  }
}
