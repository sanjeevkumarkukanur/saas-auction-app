import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PlayerStatsService } from './player-stats.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreatePlayerStatsDto, UpdatePlayerStatsDto } from '@app/common';

@ApiTags('Player Stats')
@Controller('player-stats')
export class PlayerStatsController {
  constructor(private readonly service: PlayerStatsService) {}

  @Post()
  @ApiOperation({ summary: 'Create player stats' })
  create(@Body() dto: CreatePlayerStatsDto) {
    return this.service.create(dto);
  }

  @Get(':playerSeasonId')
  @ApiOperation({ summary: 'Get stats by player season' })
  findByPlayerSeason(@Param('playerSeasonId') playerSeasonId: string) {
    return this.service.findByPlayerSeason(playerSeasonId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update player stats' })
  update(@Param('id') id: string, @Body() dto: UpdatePlayerStatsDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete player stats' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
