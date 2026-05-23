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
import { PlayerService } from './player.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePlayerDto, FilterPlayerDto, UpdatePlayerDto } from '@app/common';

@ApiTags('Players')
@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  @ApiOperation({ summary: 'Create Player' })
  @ApiResponse({ status: 201, description: 'Player created' })
  create(@Body() dto: CreatePlayerDto) {
    return this.playerService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all players' })
  findAll(@Query() filter: FilterPlayerDto) {
    return this.playerService.findAll(filter);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get player by ID' })
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update player' })
  update(@Param('id') id: string, @Body() dto: UpdatePlayerDto) {
    return this.playerService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete player' })
  remove(@Param('id') id: string) {
    return this.playerService.remove(id);
  }
}
