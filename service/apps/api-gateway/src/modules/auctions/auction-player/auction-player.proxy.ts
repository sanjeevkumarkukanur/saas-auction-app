import { SERVICES } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuctionPlayerProxy {
  constructor(
    @Inject(SERVICES.AUCTION_SERVICE)
    private readonly client: ClientProxy,
  ) {}

  addPlayer(data: any) {
    return this.client.send('auction.player.add', data);
  }

  listPlayers(auctionId: string) {
    return this.client.send('auction.player.list', { auctionId });
  }

  markSold(data: any) {
    return this.client.send('auction.player.sold', data);
  }
}
