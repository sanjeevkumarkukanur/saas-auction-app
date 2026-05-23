import { Injectable, BadRequestException } from '@nestjs/common';
import { ScoringRepository } from './scoring.repository';
import { PrismaService } from '../prisma/prisma.service';
import { ApproveScoreDto, SubmitScoreDto } from '@app/common';

@Injectable()
export class ScoringService {
  constructor(
    private readonly repository: ScoringRepository,
    private readonly prisma: PrismaService,
  ) {}

  async submitScore(dto: SubmitScoreDto) {
    return this.prisma.$transaction(async (tx) => {
      const existing = await tx.teamScore.findUnique({
        where: {
          matchId_teamId: {
            matchId: dto.matchId,
            teamId: dto.teamId,
          },
        },
      });

      if (!existing) {
        return tx.teamScore.create({
          data: {
            ...dto,
            extras: dto.extras ?? 0,
          },
        });
      }

      if (existing.isApproved) {
        throw new BadRequestException('Score already approved. Cannot modify.');
      }

      return tx.teamScore.update({
        where: {
          matchId_teamId: {
            matchId: dto.matchId,
            teamId: dto.teamId,
          },
        },
        data: {
          runs: dto.runs,
          wickets: dto.wickets,
          overs: dto.overs,
          extras: dto.extras ?? existing.extras,
          isFinal: dto.isFinal ?? false,
        },
      });
    });
  }

  async approveScore(dto: ApproveScoreDto) {
    const score = await this.repository.findScore(dto.matchId, dto.teamId);

    if (!score) {
      throw new BadRequestException('Score not found');
    }

    if (!score.isFinal) {
      throw new BadRequestException('Cannot approve. Score not marked final.');
    }

    return this.repository.approveScore(dto.matchId, dto.teamId);
  }
}
