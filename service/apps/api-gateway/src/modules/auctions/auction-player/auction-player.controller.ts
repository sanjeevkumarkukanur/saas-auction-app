import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuctionPlayerProxy } from './auction-player.proxy';

@ApiTags('Auction Player')
@Controller('auction-player')
export class AuctionPlayerController {
  constructor(private readonly proxy: AuctionPlayerProxy) {}

  @Post('add')
  add(@Body() body: any) {
    return this.proxy.addPlayer(body);
  }

  @Get(':auctionId')
  list(@Param('auctionId') auctionId: string) {
    return this.proxy.listPlayers(auctionId);
  }

  @Post('sold')
  sold(@Body() body: any) {
    return this.proxy.markSold(body);
  }
}
