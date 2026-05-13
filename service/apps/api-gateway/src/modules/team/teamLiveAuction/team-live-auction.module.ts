import { Module } from '@nestjs/common';
import { TeamLiveAuctionGateway } from './team-live-auction.gateway';
import { TeamsClientModule } from '@libs/common/clients/teams-client.module';

@Module({
  imports: [TeamsClientModule],
  providers: [TeamLiveAuctionGateway],
})
export class TeamLiveAuctionModule {}
