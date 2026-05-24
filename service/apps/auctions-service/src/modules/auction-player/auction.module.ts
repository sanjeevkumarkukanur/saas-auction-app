import { Module } from '@nestjs/common';
import { AuctionPlayerService } from './auction-player.service';
import { AuctionPlayerController } from './auction-player.controller';
import { AuctionPlayerRepository } from './auction-player.repository';

@Module({
  imports: [],
  providers: [AuctionPlayerService, AuctionPlayerRepository, PrismaModule],
  controllers: [AuctionPlayerController],
  exports: [AuctionPlayerService],
})
export class AuctionPlayerModule {}
