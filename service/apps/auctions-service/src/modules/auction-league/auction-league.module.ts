import { Module } from '@nestjs/common';
import { AuctionLeagueService } from './auction-league.service';
import { AuctionLeagueController } from './auction-league.controller';
import { AuctionLeagueRepository } from './auction-league.repository';

@Module({
  providers: [AuctionLeagueService, AuctionLeagueRepository, PrismaModule],
  controllers: [AuctionLeagueController],
  exports: [AuctionLeagueService],
})
export class AuctionLeagueModule {}
