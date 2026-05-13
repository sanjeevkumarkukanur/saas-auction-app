import { Module } from '@nestjs/common';
import { TeamLiveAuctionService } from './team-live-auction.service';
import { TeamLiveAuctionGateway } from './team-live-auction.gateway';
import { WalletModule } from '../wallets/wallet.module';

@Module({
  imports: [WalletModule],
  providers: [TeamLiveAuctionService, TeamLiveAuctionGateway],
})
export class TeamLiveAuctionModule {}
