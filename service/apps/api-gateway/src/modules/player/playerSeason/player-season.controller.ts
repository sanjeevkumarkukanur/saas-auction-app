import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PlayerSeasonProxy } from './player-season.proxy';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreatePlayerSeasonDto, UpdatePlayerSeasonDto } from '@libs/common';

@ApiTags('Player Season')
@Controller('player-season')
export class PlayerSeasonController {
  constructor(private readonly proxy: PlayerSeasonProxy) {}

  @Post()
  @ApiOperation({ summary: 'Add player to season (auction entry)' })
  create(@Body() dto: CreatePlayerSeasonDto) {
    return this.proxy.create(dto);
  }

  @Get(':seasonId')
  @ApiOperation({ summary: 'Get players in season' })
  findBySeason(@Param('seasonId') seasonId: string) {
    return this.proxy.findBySeason(seasonId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update player season (price etc)' })
  update(@Param('id') id: string, @Body() dto: UpdatePlayerSeasonDto) {
    return this.proxy.update(id, dto);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Update player status (AVAILABLE/SOLD/UNSOLD)' })
  updateStatus(@Param('id') id: string, @Body() body: { status: string }) {
    return this.proxy.updateStatus(id, body.status);
  }

  @Patch(':id/sell')
  @ApiOperation({ summary: 'Mark player as SOLD with price' })
  sell(@Param('id') id: string, @Body() body: { soldPrice: number }) {
    return this.proxy.sell(id, body.soldPrice);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove player from season' })
  remove(@Param('id') id: string) {
    return this.proxy.delete(id);
  }
}
