import { Module } from '@nestjs/common';
import { AuctionService } from './auction.service';
import { AuctionRepository } from './auction.repository';
import { AuctionController } from './auction.controller';

@Module({
  imports: [PrismaModule],
  providers: [AuctionService, AuctionRepository],
  controllers: [AuctionController],
  exports: [AuctionService],
})
export class AuctionModule {}
