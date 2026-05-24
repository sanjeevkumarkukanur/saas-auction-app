import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AuctionGateway } from '../../gateways/auction.gateway';

@Controller()
export class AuctionListener {
  constructor(private readonly gateway: AuctionGateway) {}

  @EventPattern('auction.bid')
  handleBid(
    @Payload()
    data: {
      tenantId: string;
      auctionId: string;
      amount: number;
      bidderId: string;
    },
  ) {
    this.gateway.broadcastBid(data.tenantId, data.auctionId, data);
  }
}
