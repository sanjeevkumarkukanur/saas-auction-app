import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { PlayerLeagueProxy } from './player-league.proxy';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreatePlayerLeagueDto } from '@libs/common';

@ApiTags('Player League')
@Controller('player-league')
export class PlayerLeagueController {
  constructor(private readonly proxy: PlayerLeagueProxy) {}

  @Post()
  @ApiOperation({ summary: 'Assign player to league' })
  create(@Body() dto: CreatePlayerLeagueDto) {
    return this.proxy.create(dto);
  }

  @Get(':playerId')
  @ApiOperation({ summary: 'Get player leagues' })
  findByPlayer(@Param('playerId') playerId: string) {
    return this.proxy.findByPlayer(playerId);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove player from league' })
  remove(@Param('id') id: string) {
    return this.proxy.delete(id);
  }
}
