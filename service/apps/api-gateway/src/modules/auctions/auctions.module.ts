import { Module } from '@nestjs/common';
import { AuctionModule } from './auction/auction.module';
import { AuctionTeamModule } from './auction-team/auction-team.module';
import { AuctionPlayerModule } from './auction-player/auction-player.module';
import { AuctionWalletModule } from './auction-wallet/auction-wallet.module';
import { AuctionLeagueModule } from './auction-league/auction-league.module';
import { AuctionSeasonModule } from './auction-season/auction-season.module';
import { AuctionAuthModule } from './auction-auth/auction-auth.module';
import { BiddingModule } from './auction-bidding/bidding.module';

@Module({
  imports: [
    AuctionModule,
    AuctionTeamModule,
    AuctionPlayerModule,
    AuctionWalletModule,
    AuctionLeagueModule,
    AuctionSeasonModule,
    AuctionAuthModule,
    BiddingModule,
  ],
})
export class AuctionsModule {}
