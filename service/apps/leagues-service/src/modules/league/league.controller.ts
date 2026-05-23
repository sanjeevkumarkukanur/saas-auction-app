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
import { LeaguesService } from './league.service';
import { CreateLeagueDto, LeagueFilterDto, UpdateLeagueDto } from '@app/common';

@Controller('leagues')
export class LeaguesController {
  constructor(private readonly service: LeaguesService) {}

  @Post()
  create(@Body() dto: CreateLeagueDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll(@Query() filter: LeagueFilterDto) {
    return this.service.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateLeagueDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
