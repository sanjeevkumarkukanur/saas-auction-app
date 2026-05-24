import { Module } from '@nestjs/common';
import { AuctionTeamService } from './auction-team.service';
import { AuctionTeamRepository } from './auction-team.repository';
import { AuctionTeamController } from './auction-team.controller';

@Module({
  providers: [AuctionTeamService, AuctionTeamRepository, PrismaModule],
  controllers: [AuctionTeamController],
  exports: [AuctionTeamService],
})
export class AuctionTeamModule {}
