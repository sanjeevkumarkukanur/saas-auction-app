import { Module } from '@nestjs/common';
import { PlayerStatsController } from './player-stats.controller';
import { PlayerStatsProxy } from './player-stats.proxy';
import { PlayersClientModule } from '@libs/common';

@Module({
  imports: [PlayersClientModule],
  controllers: [PlayerStatsController],
  providers: [PlayerStatsProxy],
})
export class PlayerStatsModule {}
