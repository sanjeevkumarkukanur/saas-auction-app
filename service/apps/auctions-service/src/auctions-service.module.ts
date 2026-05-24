import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PlayerModule } from 'apps/players-service/src/modules/players/player.module';
import { TenantPlayerModule } from 'apps/players-service/src/modules/tenantPlayer/tenant-player.module';
import { PlayerGameModule } from 'apps/players-service/src/modules/playerGame/player-game.module';
import { PlayerLeagueModule } from 'apps/players-service/src/modules/playerLeague/player-league.module';
import { PlayerSeasonModule } from 'apps/players-service/src/modules/playerSeason/player-season.module';
import { PlayerStatsModule } from 'apps/players-service/src/modules/playerStats/player-stats.module';

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
export class AuctionsServiceModule {}
