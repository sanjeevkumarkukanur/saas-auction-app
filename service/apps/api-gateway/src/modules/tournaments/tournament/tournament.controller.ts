import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TournamentProxy } from './tournament.proxy';
import { CreateTournamentDto, UpdateTournamentDto } from '@libs/common';

@ApiTags('Tournaments')
@Controller('tournaments')
export class TournamentController {
  constructor(private readonly proxy: TournamentProxy) {}

  @Post()
  create(@Body() dto: CreateTournamentDto) {
    return this.proxy.create(dto);
  }

  @Get()
  findAll() {
    return this.proxy.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proxy.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTournamentDto) {
    return this.proxy.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proxy.remove(id);
  }
}
