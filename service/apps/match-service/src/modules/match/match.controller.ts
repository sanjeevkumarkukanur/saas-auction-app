import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MatchService } from './match.service';
import {
  CreateMatchDto,
  ScheduleMatchDto,
  UpdateMatchDto,
  UpdateStatusDto,
} from '@app/common';

@ApiTags('Match')
@Controller('matches')
export class MatchController {
  constructor(private readonly service: MatchService) {}

  @Post()
  create(@Body() dto: CreateMatchDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMatchDto) {
    return this.service.update(id, dto);
  }

  @Patch(':id/schedule')
  schedule(@Param('id') id: string, @Body() dto: ScheduleMatchDto) {
    return this.service.schedule(id, dto);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() dto: UpdateStatusDto) {
    return this.service.updateStatus(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
