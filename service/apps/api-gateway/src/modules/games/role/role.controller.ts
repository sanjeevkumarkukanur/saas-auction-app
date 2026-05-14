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
import { RoleProxyService } from './role.proxy.service';
import { CreateRoleDto, UpdateRoleDto, RoleFilterDto } from '@libs/common';

@ApiTags('Game Roles')
@Controller('roles')
export class RoleController {
  constructor(private readonly proxy: RoleProxyService) {}

  @Post()
  @ApiOperation({ summary: 'Create role' })
  create(@Body() body: CreateRoleDto) {
    return this.proxy.createRole(body);
  }

  @Get()
  @ApiOperation({ summary: 'Get all roles' })
  findAll(@Query() query: RoleFilterDto) {
    return this.proxy.getRoles(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get role by ID' })
  findOne(@Param('id') id: string) {
    return this.proxy.getRoleById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update role' })
  update(@Param('id') id: string, @Body() body: UpdateRoleDto) {
    return this.proxy.updateRole(id, body);
  }
}
