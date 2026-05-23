import { Module } from '@nestjs/common';
import { PlayerLeagueService } from './player-league.service';
import { PlayerLeagueRepository } from './player-league.repository';
import { PlayerLeagueController } from './player-league.controller';
import { PlayerLeagueMsController } from './player-league.ms.controller';

@Module({
  controllers: [PlayerLeagueController, PlayerLeagueMsController],
  providers: [PlayerLeagueService, PlayerLeagueRepository],
  exports: [PlayerLeagueService],
})
export class PlayerLeagueModule {}
