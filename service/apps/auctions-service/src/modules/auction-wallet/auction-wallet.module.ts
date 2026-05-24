import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuctionWalletService } from './auction-wallet.service';
import { AuctionWalletController } from './auction-wallet.controller';
import { AuctionWalletRepository } from './auction-wallet.repository';
import { AuctionWalletMsController } from './auction-wallet.ms.controller';

@Module({
  imports: [PrismaModule],
  providers: [AuctionWalletService, AuctionWalletRepository],
  controllers: [AuctionWalletController, AuctionWalletMsController],
  exports: [AuctionWalletService],
})
export class AuctionWalletModule {}
