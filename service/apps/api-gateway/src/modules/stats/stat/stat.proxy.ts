import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { GetStandingsDto } from '../../../../../../libs/common/src/dtos/stats/stat/get-standings.dto';
import { GetLeaderboardDto } from '../../../../../../libs/common/src/dtos/stats/stat/get-leaderboard.dto';
import { GetPlayerStatsDto } from '../../../../../../libs/common/src/dtos/stats/stat/get-player-stats.dto';

@Injectable()
export class StatsProxy {
  constructor(
    @Inject('STATS_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  getStandings(dto: GetStandingsDto) {
    return this.client.send('standings.get', dto.seasonId);
  }

  getLeaderboard(dto: GetLeaderboardDto) {
    return this.client.send('leaderboard.get', dto.tournamentId);
  }

  getPlayerStats(dto: GetPlayerStatsDto) {
    return this.client.send('playerStats.get', dto);
  }
}
