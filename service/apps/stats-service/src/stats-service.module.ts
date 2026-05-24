import { RedisModule } from '@libs/redis';
import { Module } from '@nestjs/common';
import { EventsModule } from './modules/events/events.module';
import { LeaderboardModule } from './modules/leaderboard/leaderboard.module';
import { StandingsModule } from './modules/standings/standings.module';
import { PlayerStatsModule } from './modules/player-stats/player-stats.module';
import { TeamStatsModule } from './modules/team-stats/team-stats.module';

@Module({
  imports: [
    RedisModule,
    EventsModule,
    LeaderboardModule,
    StandingsModule,
    PlayerStatsModule,
    TeamStatsModule,
  ],
})
export class StatsServiceModule {}
