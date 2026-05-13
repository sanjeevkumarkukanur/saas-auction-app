import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PresenceFilterDto, UpdatePresenceDto } from '@libs/common';
import { TeamPresenceProxyService } from './team-presence.proxy.service';

@Controller('team-presence')
export class TeamPresenceController {
  constructor(private readonly proxy: TeamPresenceProxyService) {}

  // ✅ Mark online / update socket
  @Post()
  update(@Body() dto: UpdatePresenceDto) {
    return this.proxy.update(dto);
  }

  // ✅ Mark offline
  @Post('offline/:seasonTeamId')
  offline(@Param('seasonTeamId') id: string) {
    return this.proxy.offline(id);
  }

  // ✅ Get all presence
  @Get()
  findAll(@Query() filter: PresenceFilterDto) {
    return this.proxy.findAll(filter);
  }

  // ✅ Get single presence
  @Get(':seasonTeamId')
  findOne(@Param('seasonTeamId') id: string) {
    return this.proxy.findOne(id);
  }
}
