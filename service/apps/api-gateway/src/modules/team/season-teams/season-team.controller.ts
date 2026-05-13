import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  CreateSeasonTeamDto,
  SeasonTeamFilterDto,
  UpdateSeasonTeamDto,
} from '@libs/common';
import { SeasonTeamProxyService } from './season-team.proxy.service';

@Controller('season-teams')
export class SeasonTeamController {
  constructor(private readonly proxy: SeasonTeamProxyService) {}

  @Post()
  create(@Body() dto: CreateSeasonTeamDto) {
    return this.proxy.create(dto);
  }

  @Get()
  findAll(@Query() query: SeasonTeamFilterDto) {
    return this.proxy.findAll(query);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.proxy.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSeasonTeamDto) {
    return this.proxy.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.proxy.delete(id);
  }
}
