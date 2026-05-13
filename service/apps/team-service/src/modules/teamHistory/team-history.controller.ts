import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateTeamHistoryDto, TeamHistoryFilterDto } from '@libs/common';
import { TeamHistoryService } from './team-history.service';

@Controller()
export class TeamHistoryController {
  constructor(private readonly service: TeamHistoryService) {}

  @MessagePattern('teamHistory.create')
  create(@Payload() dto: CreateTeamHistoryDto) {
    return this.service.create(dto);
  }

  @MessagePattern('teamHistory.findAll')
  findAll(@Payload() filter: TeamHistoryFilterDto) {
    return this.service.findAll(filter);
  }

  @MessagePattern('teamHistory.findByTeam')
  findByTeam(@Payload() teamId: string) {
    return this.service.findByTeam(teamId);
  }
}
