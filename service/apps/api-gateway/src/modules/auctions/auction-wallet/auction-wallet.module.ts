import { Module } from '@nestjs/common';
import { AuctionWalletController } from './auction-wallet.controller';
import { AuctionWalletProxy } from './auction-wallet.proxy';
import { AuctionsClientModule } from '@libs/common';

@Module({
  imports: [AuctionsClientModule],
  controllers: [AuctionWalletController],
  providers: [AuctionWalletProxy],
})
export class AuctionWalletModule {}
