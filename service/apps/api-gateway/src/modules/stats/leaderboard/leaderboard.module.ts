import { Module } from '@nestjs/common';
import { LeaderboardController } from './leaderboard.controller';
import { LeaderboardProxy } from './leaderboard.proxy';
import { StatsClientModule } from '@libs/common';

@Module({
  imports: [StatsClientModule],
  controllers: [LeaderboardController],
  providers: [LeaderboardProxy],
})
export class LeaderboardModule {}
