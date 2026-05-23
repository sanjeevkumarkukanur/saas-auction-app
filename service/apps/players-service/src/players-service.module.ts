import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PlayerModule } from './modules/players/player.module';
import { TenantPlayerModule } from './modules/tenantPlayer/tenant-player.module';
import { PlayerGameModule } from './modules/playerGame/player-game.module';
import { PlayerLeagueModule } from './modules/playerLeague/player-league.module';
import { PlayerSeasonModule } from './modules/playerSeason/player-season.module';
import { PlayerStatsModule } from './modules/playerStats/player-stats.module';

@Module({
  imports: [
    PrismaModule,
    PlayerModule,
    TenantPlayerModule,
    PlayerGameModule,
    PlayerLeagueModule,
    PlayerSeasonModule,
    PlayerStatsModule,
  ],
})
export class PlayersServiceModule {}
