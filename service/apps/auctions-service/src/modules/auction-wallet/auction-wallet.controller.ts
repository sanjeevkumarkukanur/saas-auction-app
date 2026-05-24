import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuctionWalletService } from './auction-wallet.service';

@Controller()
export class AuctionWalletController {
  constructor(private readonly service: AuctionWalletService) {}

  @MessagePattern('auction.wallet.init')
  init(@Payload() data: any) {
    return this.service.initWallet(data);
  }

  @MessagePattern('auction.wallet.get')
  get(
    @Payload()
    data: {
      auctionId: string;
      teamId: string;
    },
  ) {
    return this.service.getWallet(data.auctionId, data.teamId);
  }

  @MessagePattern('auction.wallet.deduct')
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
