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
import { ApiTags } from '@nestjs/swagger';
import { TeamProxyService } from './team.proxy';
import { CreateTeamDto, TeamFilterDto, UpdateTeamDto } from '@libs/common';

@ApiTags('Gateway Team')
@Controller('teams')
export class TeamController {
  constructor(private readonly proxyService: TeamProxyService) {}

  @Post()
  create(@Body() dto: CreateTeamDto) {
    return this.proxyService.create(dto);
  }

  @Get()
  findAll(@Query() query: Record<string, TeamFilterDto>) {
    return this.proxyService.findAll(query);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.proxyService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: Record<string, UpdateTeamDto>) {
    return this.proxyService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proxyService.delete(id);
  }
}
