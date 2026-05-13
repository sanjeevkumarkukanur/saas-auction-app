import { Body, Controller, Get, Post } from '@nestjs/common';
import { PermissionsProxy } from './permissions.proxy';
import { CreatePermissionDto } from '@libs/common';

@Controller('permissions')
export class PermissionsController {
  constructor(private readonly proxy: PermissionsProxy) {}

  @Post()
  create(@Body() dto: CreatePermissionDto) {
    return this.proxy.create(dto);
  }

  @Get()
  findAll() {
    return this.proxy.findAll();
  }
}
