import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PlayerGameProxy } from './player-game.proxy';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreatePlayerGameDto, UpdatePlayerGameDto } from '@app/common';

@ApiTags('Player Game')
@Controller('player-game')
export class PlayerGameController {
  constructor(private readonly proxy: PlayerGameProxy) {}

  @Post()
  @ApiOperation({ summary: 'Assign player to game' })
  create(@Body() dto: CreatePlayerGameDto) {
    return this.proxy.create(dto);
  }

  @Get(':playerId')
  @ApiOperation({ summary: 'Get player game profiles' })
  findByPlayer(@Param('playerId') playerId: string) {
    return this.proxy.findByPlayer(playerId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update player game profile' })
  update(@Param('id') id: string, @Body() dto: UpdatePlayerGameDto) {
    return this.proxy.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove player from game' })
  remove(@Param('id') id: string) {
    return this.proxy.delete(id);
  }
}
