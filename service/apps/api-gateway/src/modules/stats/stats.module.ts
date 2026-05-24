import { Module } from '@nestjs/common';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { StatModule } from './stat/stat.module';

@Module({
  imports: [StatModule, LeaderboardModule],
})
export class StatsModule {}
