import { Module } from '@nestjs/common';
import { AuctionSeasonService } from './auction-season.service';
import { AuctionSeasonRepository } from './auction-season.repository';
import { AuctionSeasonController } from './auction-season.controller';

@Module({
  imports: [],
  providers: [AuctionSeasonService, AuctionSeasonRepository, PrismaModule],
  controllers: [AuctionSeasonController],
  exports: [AuctionSeasonService],
})
export class AuctionSeasonModule {}
