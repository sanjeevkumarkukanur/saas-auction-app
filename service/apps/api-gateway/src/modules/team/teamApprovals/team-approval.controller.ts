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
  CreateTeamApprovalDto,
  TeamApprovalFilterDto,
  UpdateTeamApprovalDto,
} from '@libs/common';
import { TeamApprovalProxyService } from './team-approval.proxy.service';

@Controller('team-approvals')
export class TeamApprovalController {
  constructor(private readonly proxy: TeamApprovalProxyService) {}

  // ✅ Create (Draft)
  @Post()
  create(@Body() dto: CreateTeamApprovalDto) {
    return this.proxy.create(dto);
  }

  // ✅ Get all
  @Get()
  findAll(@Query() filter: TeamApprovalFilterDto) {
    return this.proxy.findAll(filter);
  }

  // ✅ Get by ID
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.proxy.findById(id);
  }

  // ✅ Update comment
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTeamApprovalDto) {
    return this.proxy.update(id, dto);
  }

  // 🔥 Approve
  @Post(':id/approve')
  approve(@Param('id') id: string, @Body('approvedBy') approvedBy: string) {
    return this.proxy.approve(id, approvedBy);
  }

  // 🔥 Reject
  @Post(':id/reject')
  reject(@Param('id') id: string, @Body('comment') comment?: string) {
    return this.proxy.reject(id, comment);
  }
}
