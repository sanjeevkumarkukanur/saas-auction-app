import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { GetLeaderboardDto } from '../../../../../../libs/common/src/dtos/stats/leaderboard/get-leaderboard.dto';

@Injectable()
export class LeaderboardProxy {
  constructor(
    @Inject('STATS_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  getLeaderboard(dto: GetLeaderboardDto) {
    return this.client.send('leaderboard.get', dto.tournamentId);
  }
}
