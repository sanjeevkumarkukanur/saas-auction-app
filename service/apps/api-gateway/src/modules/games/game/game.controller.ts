import {
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { GameProxy } from './game.proxy';
import { CreateGameDto, UpdateGameDto, GameFilterDto } from '@libs/common';

@Controller('games')
export class GameController {
  constructor(private readonly proxy: GameProxy) {}

  @Post()
  create(@Body() body: CreateGameDto) {
    return this.proxy.createGame(body);
  }

  @Get()
  findAll(@Query() query: GameFilterDto) {
    return this.proxy.getGames(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proxy.getGameById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateGameDto) {
    return this.proxy.updateGame(id, body);
  }
}
