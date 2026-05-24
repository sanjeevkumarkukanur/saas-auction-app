import { Module } from '@nestjs/common';
import { AuctionPlayerController } from './auction-player.controller';
import { AuctionPlayerProxy } from './auction-player.proxy';
import { AuctionsClientModule } from '@libs/common';

@Module({
  imports: [AuctionsClientModule],
  controllers: [AuctionPlayerController],
  providers: [AuctionPlayerProxy],
})
export class AuctionPlayerModule {}
