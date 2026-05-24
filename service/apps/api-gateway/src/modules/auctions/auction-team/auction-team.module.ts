import { Module } from '@nestjs/common';
import { AuctionTeamController } from './auction-team.controller';
import { AuctionTeamProxy } from './auction-team.proxy';
import { AuctionsClientModule } from '@libs/common';

@Module({
  imports: [AuctionsClientModule],
  controllers: [AuctionTeamController],
  providers: [AuctionTeamProxy],
})
export class AuctionTeamModule {}
