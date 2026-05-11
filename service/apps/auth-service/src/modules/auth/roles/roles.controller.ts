import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { RolesService } from './roles.service';
import { AssignPermissionDto, CreateUserRoleDto } from '@libs/common';

@Controller()
export class RolesController {
  constructor(private readonly rolesService: RolesService) {
    console.log('🔥 RolesMsController LOADED');
  }

  // Create role
  @MessagePattern({ cmd: 'roles.create' })
  create(dto: CreateUserRoleDto) {
    return this.rolesService.create(dto);
  }

  // Get roles by tenant
  @MessagePattern({ cmd: 'roles.getByTenant' })
  getByTenant(data: { tenantId: string }) {
    return this.rolesService.getByTenant(data.tenantId);
  }

  // Assign permission to role
  @MessagePattern({ cmd: 'roles.assignPermission' })
  assignPermission(data: { roleId: string; dto: AssignPermissionDto }) {
    const { roleId, dto } = data;
    return this.rolesService.assignPermission(roleId, dto);
  }
}
