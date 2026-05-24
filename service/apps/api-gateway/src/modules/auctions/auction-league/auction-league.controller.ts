import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuctionLeagueProxy } from './auction-league.proxy';

@ApiTags('Auction League')
@Controller('auction-league')
export class AuctionLeagueController {
  constructor(private readonly proxy: AuctionLeagueProxy) {}

  @Post('add')
  @ApiOperation({ summary: 'Add league to auction' })
  add(
    @Body()
    body: {
      auctionId: string;
      leagueId: string;
    },
  ) {
    return this.proxy.addLeague(body);
  }

  @Get(':auctionId')
  @ApiOperation({ summary: 'List leagues in auction' })
  list(@Param('auctionId') auctionId: string) {
    return this.proxy.listLeagues(auctionId);
  }

  @Delete()
  @ApiOperation({ summary: 'Remove league from auction' })
  remove(
    @Body()
    body: {
      auctionId: string;
      leagueId: string;
    },
  ) {
    return this.proxy.removeLeague(body);
  }
}
