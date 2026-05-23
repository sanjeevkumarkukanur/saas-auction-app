import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PlayerSeasonService } from './player-season.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreatePlayerSeasonDto, UpdatePlayerSeasonDto } from '@app/common';

@ApiTags('Player Season')
@Controller('player-season')
export class PlayerSeasonController {
  constructor(private readonly service: PlayerSeasonService) {}

  @Post()
  @ApiOperation({ summary: 'Add player to season (auction entry)' })
  create(@Body() dto: CreatePlayerSeasonDto) {
    return this.service.create(dto);
  }

  @Get(':seasonId')
  @ApiOperation({ summary: 'Get players in season' })
  findBySeason(@Param('seasonId') seasonId: string) {
    return this.service.findBySeason(seasonId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePlayerSeasonDto) {
    return this.service.update(id, dto);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() body: any) {
    return this.service.updateStatus(id, body.status);
  }

  @Patch(':id/sell')
  sell(@Param('id') id: string, @Body() body: any) {
    return this.service.markSold(id, body.soldPrice);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
