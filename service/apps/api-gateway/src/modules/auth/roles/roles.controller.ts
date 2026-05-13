import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { RolesProxy } from './roles.proxy';
import { AssignPermissionDto, CreateUserRoleDto } from '@libs/common';

@Controller('roles')
export class RolesController {
  constructor(private readonly proxy: RolesProxy) {}

  // Create role
  @Post()
  create(@Body() dto: CreateUserRoleDto) {
    return this.proxy.create(dto);
  }

  // Get roles by tenant
  @Get()
  getByTenant(@Headers('x-tenant-id') tenantId: string) {
    return this.proxy.getByTenant(tenantId);
  }

  // Assign permission to role
  @Post(':roleId/permissions')
  assignPermission(
    @Param('roleId') roleId: string,
    @Body() dto: AssignPermissionDto,
  ) {
    return this.proxy.assignPermission(roleId, dto);
  }
}
