import { SERVICES } from '@/config/services.config';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuctionWalletProxy {
  constructor(
    @Inject(SERVICES.AUCTION_SERVICE)
    private readonly client: ClientProxy,
  ) {}

  init(data: any) {
    return this.client.send('auction.wallet.init', data);
  }

  get(data: any) {
    return this.client.send('auction.wallet.get', data);
  }

  deduct(data: any) {
    return this.client.send('auction.wallet.deduct', data);
  }
}
