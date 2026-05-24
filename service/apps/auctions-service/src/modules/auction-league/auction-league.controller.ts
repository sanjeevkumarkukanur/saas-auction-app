import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuctionLeagueService } from './auction-league.service';

@Controller()
export class AuctionLeagueController {
  constructor(private readonly service: AuctionLeagueService) {}

  @MessagePattern('auction.league.add')
  add(@Payload() data: any) {
    return this.service.addLeague(data);
  }

  @MessagePattern('auction.league.list')
  list(@Payload() data: { auctionId: string }) {
    return this.service.getLeagues(data.auctionId);
  }

  @MessagePattern('auction.league.remove')
  remove(
    @Payload()
    data: {
      auctionId: string;
      leagueId: string;
    },
  ) {
    return this.service.removeLeague(data.auctionId, data.leagueId);
  }
}
