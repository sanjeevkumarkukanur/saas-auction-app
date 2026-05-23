import { Module } from '@nestjs/common';
import { PlayerLeagueController } from './player-league.controller';
import { PlayerLeagueProxy } from './player-league.proxy';
import { PlayersClientModule } from '@libs/common';

@Module({
  imports: [PlayersClientModule],
  controllers: [PlayerLeagueController],
  providers: [PlayerLeagueProxy],
})
export class PlayerLeagueModule {}
