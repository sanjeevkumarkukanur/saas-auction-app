import { SERVICES } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuctionProxy {
  constructor(
    @Inject(SERVICES.AUCTION_SERVICE)
    private readonly client: ClientProxy,
  ) {}

  createAuction(data: any) {
    return this.client.send('auction.create', data);
  }

  startAuction(auctionId: string) {
    return this.client.send('auction.start', { auctionId });
  }

  listAuctions() {
    return this.client.send('auction.list', {});
  }
}
