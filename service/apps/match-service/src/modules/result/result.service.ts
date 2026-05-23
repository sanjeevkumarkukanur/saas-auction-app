import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MatchStatus, WinType } from '../../../prisma/generated/match-client';

@Injectable()
export class ResultService {
  constructor(private readonly prisma: PrismaService) {}

  async calculateResult(matchId: string) {
    return this.prisma.$transaction(async (tx) => {
      const match = await tx.match.findUnique({
        where: { id: matchId },
        include: { scores: true },
      });

      if (!match) {
        throw new BadRequestException('Match not found');
      }

      if (match.status === MatchStatus.COMPLETED) {
        throw new BadRequestException('Match already completed');
      }

      if (match.scores.length !== 2) {
        throw new BadRequestException('Both team scores not available');
      }

      const [teamA, teamB] = match.scores;

      if (!teamA.isApproved || !teamB.isApproved) {
        throw new BadRequestException('Both scores must be approved');
      }

      let winnerTeamId: string | null = null;
      let winType: WinType | null = null;
      let winMargin: number | null = null;

      if (teamA.runs > teamB.runs) {
        winnerTeamId = teamA.teamId;
        winType = WinType.RUNS;
        winMargin = teamA.runs - teamB.runs;
      } else if (teamB.runs > teamA.runs) {
        winnerTeamId = teamB.teamId;
        winType = WinType.RUNS;
        winMargin = teamB.runs - teamA.runs;
      } else {
        winType = WinType.TIE;
      }

      await tx.match.update({
        where: { id: matchId },
        data: {
          status: MatchStatus.COMPLETED,
          winnerTeamId,
          winType,
          winMargin,
          endedAt: new Date(),
        },
      });

      return {
        message: 'Match result calculated',
        winnerTeamId,
        winType,
        winMargin,
      };
    });
  }
}
