import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { StatsProxy } from './stat.proxy';
import { GetStandingsDto } from '../../../../../../libs/common/src/dtos/stats/stat/get-standings.dto';
import { GetLeaderboardDto } from '../../../../../../libs/common/src/dtos/stats/stat/get-leaderboard.dto';
import { GetPlayerStatsDto } from '../../../../../../libs/common/src/dtos/stats/stat/get-player-stats.dto';

@ApiTags('Stats')
@Controller('stats')
export class StatsController {
  constructor(private readonly proxy: StatsProxy) {}

  // 🔥 Get Season Standings
  @Get('standings')
  @ApiOperation({ summary: 'Get season standings' })
  getStandings(@Query() dto: GetStandingsDto) {
    return this.proxy.getStandings(dto);
  }

  // 🔥 Get Tournament Leaderboard
  @Get('leaderboard')
  @ApiOperation({ summary: 'Get tournament leaderboard' })
  getLeaderboard(@Query() dto: GetLeaderboardDto) {
    return this.proxy.getLeaderboard(dto);
  }

  // 🔥 Get Player Stats
  @Get('players')
  @ApiOperation({ summary: 'Get player stats' })
  getPlayerStats(@Query() dto: GetPlayerStatsDto) {
    return this.proxy.getPlayerStats(dto);
  }
}
