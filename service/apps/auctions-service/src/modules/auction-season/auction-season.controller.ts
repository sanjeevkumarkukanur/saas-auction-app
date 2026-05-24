import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuctionSeasonService } from './auction-season.service';

@Controller()
export class AuctionSeasonController {
  constructor(private readonly service: AuctionSeasonService) {}

  @MessagePattern('auction.season.add')
  add(@Payload() data: any) {
    return this.service.addSeason(data);
  }

  @MessagePattern('auction.season.listByAuction')
  listByAuction(@Payload() data: { auctionId: string }) {
    return this.service.getByAuction(data.auctionId);
  }

  @MessagePattern('auction.season.listBySeason')
  listBySeason(@Payload() data: { seasonId: string }) {
    return this.service.getBySeason(data.seasonId);
  }

  @MessagePattern('auction.season.remove')
  remove(
    @Payload()
    data: {
      auctionId: string;
      seasonId: string;
    },
  ) {
    return this.service.removeSeason(data.auctionId, data.seasonId);
  }
}
