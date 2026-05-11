import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserPermissionsProxy } from './user-permissions.proxy';
import { SetUserPermissionDto } from '@app/common';

@Controller('users/:userId/permissions')
export class UserPermissionsController {
  constructor(private readonly proxy: UserPermissionsProxy) {}

  // Set or update a permission for a user
  @Post()
  setPermission(
    @Param('userId') userId: string,
    @Body() dto: SetUserPermissionDto,
  ) {
    return this.proxy.setPermission(userId, dto);
  }

  // Get all permissions for a user
  @Get()
  getByUser(@Param('userId') userId: string) {
    return this.proxy.getByUser(userId);
  }

  // Remove a permission from a user
  @Delete(':permissionId')
  removePermission(
    @Param('userId') userId: string,
    @Param('permissionId') permissionId: string,
  ) {
    return this.proxy.removePermission(userId, permissionId);
  }
}
