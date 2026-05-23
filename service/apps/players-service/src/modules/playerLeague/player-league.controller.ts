import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { PlayerLeagueService } from './player-league.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreatePlayerLeagueDto } from '@app/common';

@ApiTags('Player League')
@Controller('player-league')
export class PlayerLeagueController {
  constructor(private readonly service: PlayerLeagueService) {}

  @Post()
  @ApiOperation({ summary: 'Assign player to league' })
  create(@Body() dto: CreatePlayerLeagueDto) {
    return this.service.create(dto);
  }

  @Get(':playerId')
  @ApiOperation({ summary: 'Get player leagues' })
  findByPlayer(@Param('playerId') playerId: string) {
    return this.service.findByPlayer(playerId);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove player from league' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
