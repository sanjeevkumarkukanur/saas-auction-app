import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuctionAuthService } from './auction-auth.service';

@Controller()
export class AuctionAuthController {
  constructor(private readonly service: AuctionAuthService) {}

  @MessagePattern('auction.auth.assignRole')
  assign(@Payload() data: any) {
    return this.service.assignRole(data);
  }

  @MessagePattern('auction.auth.validateAdmin')
  validateAdmin(@Payload() data: { auctionId: string; userId: string }) {
    return this.service.validateAdmin(data.auctionId, data.userId);
  }

  @MessagePattern('auction.auth.validateTeamOwner')
  validateTeamOwner(@Payload() data: { auctionId: string; userId: string }) {
    return this.service.validateTeamOwner(data.auctionId, data.userId);
  }
}
