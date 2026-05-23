import { Module } from '@nestjs/common';
import { PlayerStatsService } from './player-stats.service';
import { PlayerStatsRepository } from './player-stats.repository';
import { PlayerStatsController } from './player-stats.controller';
import { PlayerStatsMsController } from './player-stats.ms.controller';

@Module({
  controllers: [PlayerStatsController, PlayerStatsMsController],
  providers: [PlayerStatsService, PlayerStatsRepository],
  exports: [PlayerStatsService],
})
export class PlayerStatsModule {}
