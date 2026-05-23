import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { MatchRepository } from './match.repository';
import {
  CreateMatchDto,
  ScheduleMatchDto,
  UpdateMatchDto,
  UpdateStatusDto,
} from '@app/common';
// ✅ import type for annotations, value for comparisons
import { MatchStatus } from '@app/common';

@Injectable()
export class MatchService {
  constructor(private readonly repository: MatchRepository) {}

  create(dto: CreateMatchDto) {
    return this.repository.create({
      ...dto,
      status: MatchStatus.SCHEDULED,
    });
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: string) {
    const match = await this.repository.findById(id);
    if (!match) throw new NotFoundException('Match not found');
    return match;
  }

  async update(id: string, dto: UpdateMatchDto) {
    const match = await this.findOne(id);
    if (match.status === MatchStatus.COMPLETED) {
      throw new BadRequestException('Cannot update completed match');
    }
    return this.repository.update(id, dto);
  }

  async schedule(id: string, dto: ScheduleMatchDto) {
    await this.findOne(id);
    const date = new Date(dto.scheduledAt);
    if (date < new Date()) {
      throw new BadRequestException('Cannot schedule match in the past');
    }
    return this.repository.update(id, { scheduledAt: date });
  }

  private allowedTransitions: Record<MatchStatus, MatchStatus[]> = {
    [MatchStatus.SCHEDULED]: [MatchStatus.LIVE, MatchStatus.CANCELLED],
    [MatchStatus.LIVE]: [
      MatchStatus.INNINGS_BREAK,
      MatchStatus.COMPLETED,
      MatchStatus.ABANDONED,
    ],
    [MatchStatus.INNINGS_BREAK]: [MatchStatus.LIVE, MatchStatus.COMPLETED],
    [MatchStatus.COMPLETED]: [],
    [MatchStatus.ABANDONED]: [],
    [MatchStatus.CANCELLED]: [],
  };

  async updateStatus(id: string, dto: UpdateStatusDto) {
    const match = await this.findOne(id);
    const allowed = this.allowedTransitions[match.status as MatchStatus];

    if (!allowed.includes(dto.status)) {
      throw new BadRequestException(
        `Invalid status transition from ${match.status} to ${dto.status}`,
      );
    }

    const updateData: {
      status: MatchStatus;
      startedAt?: Date;
      endedAt?: Date;
    } = { status: dto.status };

    if (dto.status === MatchStatus.LIVE && !match.startedAt) {
      updateData.startedAt = new Date();
    }

    if (
      dto.status === MatchStatus.COMPLETED ||
      dto.status === MatchStatus.ABANDONED
    ) {
      updateData.endedAt = new Date();
    }

    return this.repository.update(id, updateData);
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.repository.delete(id);
  }
}
