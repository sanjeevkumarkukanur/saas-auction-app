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
import { GroupProxy } from './group.proxy';
import { AssignTeamDto, CreateGroupDto, UpdateGroupDto } from '@libs/common';

@ApiTags('Groups')
@Controller('groups')
export class GroupController {
  constructor(private readonly proxy: GroupProxy) {}

  @Post()
  create(@Body() dto: CreateGroupDto) {
    return this.proxy.create(dto);
  }

  @Get()
  findByStage(@Query('stageId') stageId: string) {
    return this.proxy.findByStage(stageId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proxy.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateGroupDto) {
    return this.proxy.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proxy.remove(id);
  }

  @Post('assign-team')
  assignTeam(@Body() dto: AssignTeamDto) {
    return this.proxy.assignTeam(dto);
  }
}
