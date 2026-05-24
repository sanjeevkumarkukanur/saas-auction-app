import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RegisterAuctionTeamDto } from '@app/common';
import { AuctionTeamProxy } from './auction-team.proxy';

@ApiTags('Auction Team')
@Controller('auction-team')
export class AuctionTeamController {
  constructor(private readonly proxy: AuctionTeamProxy) {}

  @Post('register')
  register(@Body() dto: RegisterAuctionTeamDto) {
    return this.proxy.registerTeam(dto);
  }

  @Get(':auctionId')
  list(@Param('auctionId') auctionId: string) {
    return this.proxy.getTeams(auctionId);
  }
}
