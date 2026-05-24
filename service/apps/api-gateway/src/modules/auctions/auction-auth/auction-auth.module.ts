import { Module } from '@nestjs/common';
import { AuctionAuthController } from './auction-auth.controller';
import { AuctionAuthProxy } from './auction-auth.proxy';
import { AuctionsClientModule } from '@libs/common';

@Module({
  imports: [AuctionsClientModule],
  controllers: [AuctionAuthController],
  providers: [AuctionAuthProxy],
})
export class AuctionAuthModule {}
