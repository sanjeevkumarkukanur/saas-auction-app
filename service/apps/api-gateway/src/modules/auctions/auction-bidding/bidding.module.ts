import { Module } from '@nestjs/common';
import { BiddingController } from './bidding.controller';
import { BiddingProxy } from './bidding.proxy';
import { AuctionsClientModule } from '@libs/common';

@Module({
  imports: [AuctionsClientModule], // ✅ provides AUCTION_SERVICE
  controllers: [BiddingController],
  providers: [BiddingProxy],
})
export class BiddingModule {}
