import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { LeagueProxy } from './league.proxy';
import { CreateLeagueDto, LeagueFilterDto, UpdateLeagueDto } from '@app/common';

@Controller('leagues')
export class LeagueController {
  constructor(private readonly proxy: LeagueProxy) {}

  @Post()
  create(@Body() dto: CreateLeagueDto) {
    return this.proxy.create(dto);
  }

  @Get()
  findAll(@Query() filter: LeagueFilterDto) {
    return this.proxy.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proxy.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateLeagueDto) {
    return this.proxy.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proxy.delete(id);
  }
}
