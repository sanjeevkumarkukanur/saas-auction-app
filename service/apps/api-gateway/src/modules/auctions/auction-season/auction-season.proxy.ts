import { SERVICES } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuctionSeasonProxy {
  constructor(
    @Inject(SERVICES.AUCTION_SERVICE)
    private readonly client: ClientProxy,
  ) {}

  addSeason(data: { auctionId: string; seasonId: string }) {
    return this.client.send('auction.season.add', data);
  }

  listByAuction(auctionId: string) {
    return this.client.send('auction.season.listByAuction', { auctionId });
  }

  listBySeason(seasonId: string) {
    return this.client.send('auction.season.listBySeason', { seasonId });
  }

  removeSeason(data: { auctionId: string; seasonId: string }) {
    return this.client.send('auction.season.remove', data);
  }
}
