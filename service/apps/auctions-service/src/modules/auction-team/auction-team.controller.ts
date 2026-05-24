import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuctionTeamService } from './auction-team.service';

@Controller()
export class AuctionTeamController {
  constructor(private readonly service: AuctionTeamService) {}

  @MessagePattern('auction.team.register')
  register(@Payload() data: any) {
    return this.service.registerTeam(data);
  }

  @MessagePattern('auction.team.list')
  list(@Payload() data: { auctionId: string }) {
    return this.service.getAuctionTeams(data.auctionId);
  }

  @MessagePattern('auction.team.deductBudget')
  deduct(
    @Payload()
    data: {
      auctionId: string;
      teamId: string;
      amount: number;
    },
  ) {
    return this.service.deductBudget(data.auctionId, data.teamId, data.amount);
  }
}
