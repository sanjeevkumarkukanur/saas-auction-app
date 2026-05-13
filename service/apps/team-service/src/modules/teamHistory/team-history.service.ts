import { Injectable } from '@nestjs/common';
import { CreateTeamHistoryDto, TeamHistoryFilterDto } from '@libs/common';
import { TeamHistoryRepository } from './team-history.repository';
import { $Enums } from '@prisma/teams-client';

@Injectable()
export class TeamHistoryService {
  constructor(private readonly repo: TeamHistoryRepository) {}

  create(dto: CreateTeamHistoryDto) {
    return this.repo.create({
      tenantId: dto.tenantId,
      teamId: dto.teamId,
      seasonTeamId: dto.seasonTeamId,

      // ✅ FIX HERE
      action: dto.action as $Enums.TeamHistoryAction,

      oldValue: dto.oldValue ?? undefined,
      newValue: dto.newValue ?? undefined,
      changedBy: dto.changedBy,
      note: dto.note,
    });
  }

  findAll(filter: TeamHistoryFilterDto) {
    return this.repo.findAll(filter);
  }

  findByTeam(teamId: string) {
    return this.repo.findByTeam(teamId);
  }
}
