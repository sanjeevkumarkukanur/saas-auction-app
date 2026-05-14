import {
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { FormatProxyService } from './format.proxy.service';
import {
  FormatFilterDto,
  CreateFormatDto,
  UpdateFormatDto,
} from '@libs/common';

@ApiTags('Formats')
@Controller('formats')
export class FormatController {
  constructor(private readonly proxy: FormatProxyService) {}

  @Post()
  @ApiOperation({ summary: 'Create format' })
  create(@Body() body: CreateFormatDto) {
    return this.proxy.createFormat(body);
  }

  @Get()
  @ApiOperation({ summary: 'Get all formats' })
  findAll(@Query() query: FormatFilterDto) {
    return this.proxy.getFormats(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get format by ID' })
  findOne(@Param('id') id: string) {
    return this.proxy.getFormatById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update format' })
  update(@Param('id') id: string, @Body() body: UpdateFormatDto) {
    return this.proxy.updateFormat(id, body);
  }
}
