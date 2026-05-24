import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuctionPlayerService } from './auction-player.service';

@Controller()
export class AuctionPlayerController {
  constructor(private readonly auctionPlayerService: AuctionPlayerService) {}

  @MessagePattern('auction.player.add')
  addPlayer(@Payload() data: any) {
    return this.auctionPlayerService.addPlayerToAuction(data);
  }

  @MessagePattern('auction.player.list')
  getPlayers(@Payload() data: { auctionId: string }) {
    return this.auctionPlayerService.getAuctionPlayers(data.auctionId);
  }

  @MessagePattern('auction.player.sold')
  markSold(
    @Payload()
    data: {
      playerSeasonId: string;
      teamId: string;
      amount: number;
      auctionId: string;
    },
  ) {
    return this.auctionPlayerService.markPlayerSold(
      data.playerSeasonId,
      data.teamId,
      data.amount,
      data.auctionId,
    );
  }

  @MessagePattern('auction.player.unsold')
  markUnsold(
    @Payload()
    data: {
      auctionId: string;
      playerSeasonId: string;
    },
  ) {
    return this.auctionPlayerService.markPlayerUnsold(
      data.auctionId,
      data.playerSeasonId,
    );
  }
}
