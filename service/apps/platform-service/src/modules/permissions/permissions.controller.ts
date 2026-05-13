import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from '@libs/common';

@Controller()
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {
    console.log('🔥 PermissionsMsController LOADED');
  }

  // Create permission
  @MessagePattern({ cmd: 'permissions.create' })
  create(dto: CreatePermissionDto) {
    return this.permissionsService.create(dto);
  }

  // Get all permissions
  @MessagePattern({ cmd: 'permissions.findAll' })
  findAll() {
    return this.permissionsService.findAll();
  }
}
