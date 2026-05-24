import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StageProxy } from './stage.proxy';
import { CreateStageDto, UpdateStageDto } from '@libs/common';

@ApiTags('Stages')
@Controller('stages')
export class StageController {
  constructor(private readonly proxy: StageProxy) {}

  @Post()
  create(@Body() dto: CreateStageDto) {
    return this.proxy.create(dto);
  }

  @Get()
  findByTournament(@Query('tournamentId') tournamentId: string) {
    return this.proxy.findByTournament(tournamentId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proxy.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateStageDto) {
    return this.proxy.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proxy.remove(id);
  }
}
