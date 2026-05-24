import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuctionService } from './auction.service';

@Controller()
export class AuctionController {
  constructor(private readonly service: AuctionService) {}

  @MessagePattern('auction.create')
  create(@Payload() data: any) {
    return this.service.createAuction(data);
  }

  @MessagePattern('auction.start')
  start(@Payload() data: { auctionId: string }) {
    return this.service.startAuction(data.auctionId);
  }

  @MessagePattern('auction.pause')
  pause(@Payload() data: { auctionId: string }) {
    return this.service.pauseAuction(data.auctionId);
  }

  @MessagePattern('auction.end')
  end(@Payload() data: { auctionId: string }) {
    return this.service.endAuction(data.auctionId);
  }

  @MessagePattern('auction.get')
  get(@Payload() data: { auctionId: string }) {
    return this.service.getAuction(data.auctionId);
  }

  @MessagePattern('auction.list')
  list() {
    return this.service.listAuctions();
  }
}
