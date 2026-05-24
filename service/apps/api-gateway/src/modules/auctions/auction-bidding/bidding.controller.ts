import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { BiddingProxy } from './bidding.proxy';

@ApiTags('Auction Bidding')
@Controller('auction-bidding')
export class BiddingController {
  constructor(private readonly proxy: BiddingProxy) {}

  /**
   * 🔥 Place bid (REST → Gateway → MS)
   */
  @Post('place')
  @ApiOperation({ summary: 'Place a bid' })
  placeBid(
    @Body()
    body: {
      auctionId: string;
      playerSeasonId: string;
      teamId: string;
      amount: number;
      currentBid?: number;
      walletBalance?: number;
    },
  ) {
    return this.proxy.placeBid(body);
  }
}
