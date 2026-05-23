import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PlayerGameService } from './player-game.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreatePlayerGameDto, UpdatePlayerGameDto } from '@app/common';

@ApiTags('Player Game')
@Controller('player-game')
export class PlayerGameController {
  constructor(private readonly service: PlayerGameService) {}

  @Post()
  @ApiOperation({ summary: 'Assign player to game' })
  create(@Body() dto: CreatePlayerGameDto) {
    return this.service.create(dto);
  }

  @Get(':playerId')
  @ApiOperation({ summary: 'Get player games' })
  findByPlayer(@Param('playerId') playerId: string) {
    return this.service.findByPlayer(playerId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update player game profile' })
  update(@Param('id') id: string, @Body() dto: UpdatePlayerGameDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove player from game' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
