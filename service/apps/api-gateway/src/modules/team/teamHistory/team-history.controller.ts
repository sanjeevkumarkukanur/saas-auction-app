import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateTeamHistoryDto, TeamHistoryFilterDto } from '@libs/common';
import { TeamHistoryProxyService } from './team-history.proxy.service';

@Controller('team-history')
export class TeamHistoryController {
  constructor(private readonly proxy: TeamHistoryProxyService) {}

  // ✅ Create history log
  @Post()
  create(@Body() dto: CreateTeamHistoryDto) {
    return this.proxy.create(dto);
  }

  // ✅ Get all history
  @Get()
  findAll(@Query() filter: TeamHistoryFilterDto) {
    return this.proxy.findAll(filter);
  }

  // ✅ Get team timeline
  @Get('team/:teamId')
  findByTeam(@Param('teamId') teamId: string) {
    return this.proxy.findByTeam(teamId);
  }
}
