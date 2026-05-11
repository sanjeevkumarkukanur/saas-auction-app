import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserPermissionsService } from './user-permissions.service';
import { SetUserPermissionDto } from '@libs/common';

@Controller()
export class UserPermissionsController {
  constructor(private readonly service: UserPermissionsService) {
    console.log('🔥 UserPermissionsMsController LOADED');
  }

  // Set or update a user permission
  @MessagePattern({ cmd: 'userPermissions.set' })
  setPermission(data: { userId: string; dto: SetUserPermissionDto }) {
    const { userId, dto } = data;
    return this.service.setPermission(userId, dto);
  }

  // Remove a user permission
  @MessagePattern({ cmd: 'userPermissions.remove' })
  removePermission(data: { userId: string; permissionId: string }) {
    const { userId, permissionId } = data;
    return this.service.removePermission(userId, permissionId);
  }

  // Get all permissions for a user
  @MessagePattern({ cmd: 'userPermissions.getByUser' })
  getByUser(data: { userId: string }) {
    return this.service.getUserPermissions(data.userId);
  }
}
