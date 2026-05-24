import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { LeaderboardProxy } from './leaderboard.proxy';
import { GetLeaderboardDto } from '../../../../../../libs/common/src/dtos/stats/leaderboard/get-leaderboard.dto';

@ApiTags('Leaderboard')
@Controller('stats/leaderboard')
export class LeaderboardController {
  constructor(private readonly proxy: LeaderboardProxy) {}

  @Get()
  @ApiOperation({ summary: 'Get tournament leaderboard' })
  getLeaderboard(@Query() dto: GetLeaderboardDto) {
    return this.proxy.getLeaderboard(dto);
  }
}
