import { Module } from '@nestjs/common';
import { PlayerSeasonService } from './player-season.service';
import { PlayerSeasonRepository } from './player-season.repository';
import { PlayerSeasonController } from './player-season.controller';
import { PlayerSeasonMsController } from './player-season.ms.controller';

@Module({
  controllers: [PlayerSeasonController, PlayerSeasonMsController],
  providers: [PlayerSeasonService, PlayerSeasonRepository],
  exports: [PlayerSeasonService],
})
export class PlayerSeasonModule {}
