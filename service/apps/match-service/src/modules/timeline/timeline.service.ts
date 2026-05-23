import { Injectable, BadRequestException } from '@nestjs/common';
import { TimelineRepository } from './timeline.repository';
import { CreateTimelineDto } from './dto/create-timeline.dto';
import { MatchStatus } from '../../../prisma/generated/match-client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TimelineService {
  constructor(
    private readonly repository: TimelineRepository,
    private readonly prisma: PrismaService,
  ) {}

  async addEvent(dto: CreateTimelineDto) {
    const match = await this.prisma.match.findUnique({
      where: { id: dto.matchId },
    });

    if (!match) {
      throw new BadRequestException('Match not found');
    }

    if (match.status === MatchStatus.COMPLETED) {
      throw new BadRequestException(
        'Cannot add timeline event to completed match',
      );
    }

    return this.repository.create(dto);
  }

  findByMatch(matchId: string) {
    return this.repository.findByMatch(matchId);
  }

  clearMatchTimeline(matchId: string) {
    return this.repository.deleteByMatch(matchId);
  }
}
