import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TeamsModule } from './modules/teams/team.module';
import { SeasonTeamModule } from './modules/season-teams/season-team.module';
import { WalletModule } from './modules/wallets/wallet.module';
import { TeamOwnerModule } from './modules/teamOwners/team-owner.module';
import { TeamPresenceModule } from './modules/teamPresence/team-presence.module';
import { TeamStatModule } from './modules/teamStats/team-stat.module';
import { TeamLiveAuctionModule } from './modules/teamLiveAuction/team-live-auction.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'apps/team-service/.env',
    }),
    TeamsModule,
    SeasonTeamModule,
    WalletModule,
    TeamOwnerModule,
    TeamPresenceModule,
    TeamStatModule,
    TeamLiveAuctionModule,
  ],
})
export class TeamServiceModule {}
