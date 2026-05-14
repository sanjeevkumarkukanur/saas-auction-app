import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FieldsProxy } from './fields.proxy';
import { CreateFieldDto, UpdateFieldDto } from '@libs/common';

@ApiTags('Master Fields')
@Controller('master/fields')
export class FieldsController {
  constructor(private readonly proxy: FieldsProxy) {}

  @Post()
  create(@Body() dto: CreateFieldDto) {
    return this.proxy.create(dto);
  }

  @Get('by-section/:sectionId')
  findBySection(@Param('sectionId') sectionId: string) {
    return this.proxy.findBySection(sectionId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateFieldDto) {
    return this.proxy.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proxy.remove(id);
  }
}
