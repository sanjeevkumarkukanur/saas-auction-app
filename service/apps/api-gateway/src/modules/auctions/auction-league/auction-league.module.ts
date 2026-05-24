import { Module } from '@nestjs/common';
import { AuctionLeagueController } from './auction-league.controller';
import { AuctionLeagueProxy } from './auction-league.proxy';
import { AuctionsClientModule } from '@libs/common';

@Module({
  imports: [AuctionsClientModule],
  controllers: [AuctionLeagueController],
  providers: [AuctionLeagueProxy],
})
export class AuctionLeagueModule {}
