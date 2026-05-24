import { Module } from '@nestjs/common';
import { StatsListener } from './stats.listener';
import { StandingsModule } from '../standings/standings.module';
import { PlayerStatsModule } from '../player-stats/player-stats.module';
import { LeaderboardModule } from '../leaderboard/leaderboard.module';

@Module({
  imports: [StandingsModule, PlayerStatsModule, LeaderboardModule],
  providers: [StatsListener],
})
export class EventsModule {}
