import { Module } from '@nestjs/common';
import { TenantPlayerModule } from './tenantPlayer/tenant-player.module';
import { PlayerGameModule } from './playerGame/player-game.module';
import { PlayerLeagueModule } from './playerLeague/player-league.module';
import { PlayerSeasonModule } from './playerSeason/player-season.module';
import { PlayerTeamModule } from './playerTeam/player-team.module';

@Module({
  imports: [
    PlayersModule,
    TenantPlayerModule,
    PlayerGameModule,
    PlayerLeagueModule,
    PlayerSeasonModule,
    PlayerTeamModule,
  ],
})
export class PlayersModule {}
