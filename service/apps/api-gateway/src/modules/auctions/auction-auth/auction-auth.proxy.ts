import { SERVICES } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuctionAuthProxy {
  constructor(
    @Inject(SERVICES.AUCTION_SERVICE)
    private readonly client: ClientProxy,
  ) {}

  assignRole(data: { auctionId: string; userId: string; role: string }) {
    return this.client.send('auction.auth.assignRole', data);
  }

  validateAdmin(data: { auctionId: string; userId: string }) {
    return this.client.send('auction.auth.validateAdmin', data);
  }

  validateTeamOwner(data: { auctionId: string; userId: string }) {
    return this.client.send('auction.auth.validateTeamOwner', data);
  }
}
