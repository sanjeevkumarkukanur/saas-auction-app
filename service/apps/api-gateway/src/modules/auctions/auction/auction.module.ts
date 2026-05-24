import { Module } from '@nestjs/common';
import { AuctionController } from './auction.controller';
import { AuctionProxy } from './auction.proxy';
import { AuctionsClientModule } from '@libs/common';

@Module({
  imports: [AuctionsClientModule],
  controllers: [AuctionController],
  providers: [AuctionProxy],
})
export class AuctionModule {}
