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
import { SeasonProxy } from './season.proxy';
import {
  CreateSeasonDto,
  SeasonFilterDto,
  UpdateSeasonDto,
} from '@libs/common';

@Controller('seasons')
export class SeasonController {
  constructor(private readonly proxy: SeasonProxy) {}

  @Post()
  create(@Body() dto: CreateSeasonDto) {
    return this.proxy.create(dto);
  }

  @Get()
  findAll(@Query() filter: SeasonFilterDto) {
    return this.proxy.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proxy.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSeasonDto) {
    return this.proxy.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proxy.delete(id);
  }
}
