import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuctionSeasonProxy } from './auction-season.proxy';

@ApiTags('Auction Season')
@Controller('auction-season')
export class AuctionSeasonController {
  constructor(private readonly proxy: AuctionSeasonProxy) {}

  @Post('add')
  @ApiOperation({ summary: 'Add season to auction' })
  add(
    @Body()
    body: {
      auctionId: string;
      seasonId: string;
    },
  ) {
    return this.proxy.addSeason(body);
  }

  @Get('auction/:auctionId')
  @ApiOperation({ summary: 'Get seasons by auction' })
  getByAuction(@Param('auctionId') auctionId: string) {
    return this.proxy.listByAuction(auctionId);
  }

  @Get('season/:seasonId')
  @ApiOperation({ summary: 'Get auctions by season' })
  getBySeason(@Param('seasonId') seasonId: string) {
    return this.proxy.listBySeason(seasonId);
  }

  @Delete()
  @ApiOperation({ summary: 'Remove season from auction' })
  remove(
    @Body()
    body: {
      auctionId: string;
      seasonId: string;
    },
  ) {
    return this.proxy.removeSeason(body);
  }
}
