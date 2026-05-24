import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RegisterAuctionTeamDto, SERVICES } from '@libs/common';

@Injectable()
export class AuctionTeamProxy {
  constructor(
    @Inject(SERVICES.AUCTION_SERVICE)
    private readonly client: ClientProxy,
  ) {}

  registerTeam(dto: RegisterAuctionTeamDto) {
    return this.client.send('auction.team.register', dto);
  }

  getTeams(auctionId: string) {
    return this.client.send('auction.team.list', { auctionId });
  }
}
