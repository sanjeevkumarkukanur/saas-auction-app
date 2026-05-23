import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { MatchProxy } from './match.proxy';
import {
  CreateMatchDto,
  ScheduleMatchDto,
  UpdateMatchDto,
  UpdateStatusDto,
} from '@libs/common';

@ApiTags('Match')
@Controller('matches')
export class MatchController {
  constructor(private readonly proxy: MatchProxy) {}

  // ✅ Create Match
  @Post()
  @ApiOperation({ summary: 'Create new match' })
  create(@Body() dto: CreateMatchDto) {
    return this.proxy.create(dto);
  }

  // ✅ Get All Matches
  @Get()
  @ApiOperation({ summary: 'Get all matches' })
  findAll() {
    return this.proxy.findAll();
  }

  // ✅ Get Match By ID
  @Get(':id')
  @ApiOperation({ summary: 'Get match by ID' })
  findOne(@Param('id') id: string) {
    return this.proxy.findOne(id);
  }

  // ✅ Update Match
  @Patch(':id')
  @ApiOperation({ summary: 'Update match details' })
  update(@Param('id') id: string, @Body() dto: UpdateMatchDto) {
    return this.proxy.update(id, dto);
  }

  // ✅ Schedule Match
  @Patch(':id/schedule')
  @ApiOperation({ summary: 'Schedule match time' })
  schedule(@Param('id') id: string, @Body() dto: ScheduleMatchDto) {
    return this.proxy.schedule(id, dto);
  }

  // ✅ Update Match Status
  @Patch(':id/status')
  @ApiOperation({ summary: 'Update match status' })
  updateStatus(@Param('id') id: string, @Body() dto: UpdateStatusDto) {
    return this.proxy.updateStatus(id, dto);
  }

  // ✅ Delete Match
  @Delete(':id')
  @ApiOperation({ summary: 'Delete match' })
  remove(@Param('id') id: string) {
    return this.proxy.remove(id);
  }
}
