import { Module } from '@nestjs/common';
import { TeamModule } from './teams/team.module';
import { SeasonTeamModule } from './season-teams/season-team.module';
import { WalletModule } from './wallets/wallet.module';
import { TeamPresenceModule } from './teamPresence/team-presence.module';
import { TeamStatModule } from './teamStats/team-stat.module';
import { TeamHistoryModule } from './teamHistory/team-history.module';
import { TeamApprovalModule } from './teamApprovals/team-approval.module';

@Module({
  imports: [
    TeamModule,
    WalletModule,
    SeasonTeamModule,
    TeamPresenceModule,
    TeamStatModule,
    TeamHistoryModule,
    TeamApprovalModule,
  ],
})
export class TeamsModule {}
