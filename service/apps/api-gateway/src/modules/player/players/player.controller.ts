import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { PlayerProxy } from './player.proxy';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Players')
@Controller('players')
export class PlayerController {
  constructor(private readonly playerProxy: PlayerProxy) {}

  @Post()
  @ApiOperation({ summary: 'Create Player' })
  create(@Body() body: any) {
    return this.playerProxy.create(body);
  }

  @Get()
  @ApiOperation({ summary: 'Get all players' })
  findAll(@Query() query: any) {
    return this.playerProxy.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get player by ID' })
  findOne(@Param('id') id: string) {
    return this.playerProxy.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update player' })
  update(@Param('id') id: string, @Body() body: any) {
    return this.playerProxy.update(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete player' })
  remove(@Param('id') id: string) {
    return this.playerProxy.delete(id);
  }
}
