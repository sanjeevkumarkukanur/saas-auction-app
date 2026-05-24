import { SERVICES } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BiddingProxy {
  constructor(
    @Inject(SERVICES.AUCTION_SERVICE)
    private readonly client: ClientProxy,
  ) {}

  /**
   * 🔥 Send bid to auction-service
   */
  placeBid(data: {
    auctionId: string;
    playerSeasonId: string;
    teamId: string;
    amount: number;
    currentBid?: number;
    walletBalance?: number;
  }) {
    return this.client.send('auction.bid.place', data);
  }
}
