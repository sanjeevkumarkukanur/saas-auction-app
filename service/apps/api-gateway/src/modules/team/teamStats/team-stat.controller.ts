import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateTeamStatDto, TeamStatFilterDto } from '@libs/common';
import { TeamStatProxyService } from './team-stat.proxy.service';

@Controller('team-stats')
export class TeamStatController {
  constructor(private readonly proxy: TeamStatProxyService) {}

  // ✅ Create stats
  @Post()
  create(@Body() dto: CreateTeamStatDto) {
    return this.proxy.create(dto);
  }

  // ✅ Update on player buy
  @Post('buy')
  updateOnBuy(@Body() body: { seasonTeamId: string; amount: number }) {
    return this.proxy.updateOnBuy(body.seasonTeamId, body.amount);
  }

  // ✅ Increment unsold
  @Post('unsold/:seasonTeamId')
  incrementUnsold(@Param('seasonTeamId') id: string) {
    return this.proxy.incrementUnsold(id);
  }

  // ✅ Get all stats (leaderboard)
  @Get()
  findAll(@Query() filter: TeamStatFilterDto) {
    return this.proxy.findAll(filter);
  }

  // ✅ Get single stat
  @Get(':seasonTeamId')
  findOne(@Param('seasonTeamId') id: string) {
    return this.proxy.findOne(id);
  }
}
