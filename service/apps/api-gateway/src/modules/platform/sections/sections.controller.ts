import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SectionsProxy } from './sections.proxy';
import { ApiTags } from '@nestjs/swagger';
import { CreateSectionDto, UpdateSectionDto } from '@libs/common';

@ApiTags('Master Sections')
@Controller('master/sections')
export class SectionsController {
  constructor(private readonly proxy: SectionsProxy) {}

  @Post()
  create(@Body() dto: CreateSectionDto) {
    return this.proxy.create(dto);
  }

  @Get('by-page/:pageId')
  findByPage(@Param('pageId') pageId: string) {
    return this.proxy.findByPage(pageId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSectionDto) {
    return this.proxy.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proxy.remove(id);
  }
}
