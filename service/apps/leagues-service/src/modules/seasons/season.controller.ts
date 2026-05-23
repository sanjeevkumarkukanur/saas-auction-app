import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SeasonService } from './season.service';
import { CreateSeasonDto, SeasonFilterDto, UpdateSeasonDto } from '@app/common';

@ApiTags('Seasons')
@Controller('seasons')
export class SeasonController {
  constructor(private readonly service: SeasonService) {}

  @ApiOperation({ summary: 'Create season for league' })
  @Post()
  async create(@Body() dto: CreateSeasonDto) {
    try {
      return await this.service.create(dto);
    } catch (error) {
      console.error('🔥 Create Season Error:', error);

      throw error; // rethrow so Nest handles response
    }
  }

  @ApiOperation({ summary: 'Get seasons' })
  @Get()
  findAll(@Query() filter: SeasonFilterDto) {
    return this.service.findAll(filter);
  }

  @ApiOperation({ summary: 'Get season by ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @ApiOperation({ summary: 'Update season' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSeasonDto) {
    return this.service.update(id, dto);
  }

  @ApiOperation({ summary: 'Delete season' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
