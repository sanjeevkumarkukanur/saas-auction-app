import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuctionWalletProxy } from './auction-wallet.proxy';

@ApiTags('Auction Wallet')
@Controller('auction-wallet')
export class AuctionWalletController {
  constructor(private readonly proxy: AuctionWalletProxy) {}

  @Post('init')
  init(@Body() body: any) {
    return this.proxy.init(body);
  }

  @Get()
  get(@Query('auctionId') auctionId: string, @Query('teamId') teamId: string) {
    return this.proxy.get({ auctionId, teamId });
  }

  @Post('deduct')
  deduct(@Body() body: any) {
    return this.proxy.deduct(body);
  }
}
