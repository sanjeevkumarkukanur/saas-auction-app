import { Module } from '@nestjs/common';
import { AuctionSeasonController } from './auction-season.controller';
import { AuctionSeasonProxy } from './auction-season.proxy';
import { AuctionsClientModule } from '@libs/common';

@Module({
  imports: [AuctionsClientModule],
  controllers: [AuctionSeasonController],
  providers: [AuctionSeasonProxy],
})
export class AuctionSeasonModule {}
