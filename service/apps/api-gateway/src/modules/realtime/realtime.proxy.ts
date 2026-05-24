import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RealtimeProxy {
  constructor(
    @Inject('REALTIME_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  auctionCreated(data: { tenantId: string; auctionId: string }) {
    this.client.emit('auction.created', data);
  }

  auctionStarted(data: { tenantId: string; auctionId: string }) {
    this.client.emit('auction.started', data);
  }

  bidPlaced(data: {
    tenantId: string;
    auctionId: string;
    teamId: string;
    amount: number;
  }) {
    this.client.emit('auction.bid', data);
  }
}
