import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuctionProxy } from './auction.proxy';

@ApiTags('Auction')
@Controller('auction')
export class AuctionController {
  constructor(private readonly proxy: AuctionProxy) {}

  @Post('create')
  create(@Body() body: any) {
    return this.proxy.createAuction(body);
  }

  @Post('start/:id')
  start(@Param('id') id: string) {
    return this.proxy.startAuction(id);
  }

  @Get()
  list() {
    return this.proxy.listAuctions();
  }
}
