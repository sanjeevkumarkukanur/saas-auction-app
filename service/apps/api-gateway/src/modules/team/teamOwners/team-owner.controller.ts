import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  CreateTeamOwnerDto,
  TeamOwnerFilterDto,
  UpdateTeamOwnerDto,
} from '@libs/common';
import { TeamOwnerProxyService } from './team-owner.proxy.service';

@Controller('team-owners')
export class TeamOwnerController {
  constructor(private readonly proxy: TeamOwnerProxyService) {}

  // ✅ Create owner
  @Post()
  create(@Body() dto: CreateTeamOwnerDto) {
    return this.proxy.create(dto);
  }

  // ✅ Transfer ownership
  @Post('transfer')
  transfer(@Body() dto: CreateTeamOwnerDto) {
    return this.proxy.transfer(dto);
  }

  // ✅ Get all
  @Get()
  findAll(@Query() query: TeamOwnerFilterDto) {
    return this.proxy.findAll(query);
  }

  // ✅ Get by id
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.proxy.findById(id);
  }

  // ✅ Update
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTeamOwnerDto) {
    return this.proxy.update(id, dto);
  }
}
