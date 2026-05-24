import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BiddingService } from './bidding.service';

@Controller()
export class BiddingController {
  constructor(private readonly biddingService: BiddingService) {}

  /**
   * 🔥 Entry from API Gateway
   */
  @MessagePattern('auction.bid.place')
  placeBid(
    @Payload()
    data: {
      auctionId: string;
      playerSeasonId: string;
      teamId: string;
      amount: number;
      currentBid?: number;
      walletBalance?: number;
    },
  ) {
    return this.biddingService.placeBid(data);
  }
}
