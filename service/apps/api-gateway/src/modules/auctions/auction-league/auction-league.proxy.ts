import { SERVICES } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuctionLeagueProxy {
  constructor(
    @Inject(SERVICES.AUCTION_SERVICE)
    private readonly client: ClientProxy,
  ) {}

  addLeague(data: { auctionId: string; leagueId: string }) {
    return this.client.send('auction.league.add', data);
  }

  listLeagues(auctionId: string) {
    return this.client.send('auction.league.list', { auctionId });
  }

  removeLeague(data: { auctionId: string; leagueId: string }) {
    return this.client.send('auction.league.remove', data);
  }
}
