import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PlayerStatsProxy } from './player-stats.proxy';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreatePlayerStatsDto, UpdatePlayerStatsDto } from '@libs/common';

@ApiTags('Player Stats')
@Controller('player-stats')
export class PlayerStatsController {
  constructor(private readonly proxy: PlayerStatsProxy) {}

  @Post()
  @ApiOperation({ summary: 'Create player stats' })
  create(@Body() dto: CreatePlayerStatsDto) {
    return this.proxy.create(dto);
  }

  @Get(':playerSeasonId')
  @ApiOperation({ summary: 'Get stats by player season' })
  findByPlayerSeason(@Param('playerSeasonId') playerSeasonId: string) {
    return this.proxy.findByPlayerSeason(playerSeasonId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update player stats' })
  update(@Param('id') id: string, @Body() dto: UpdatePlayerStatsDto) {
    return this.proxy.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete player stats' })
  remove(@Param('id') id: string) {
    return this.proxy.delete(id);
  }
}
