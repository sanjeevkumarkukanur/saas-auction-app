import { Body, Controller, Get, Param, Patch, Put } from '@nestjs/common';
import { TenantPagesProxy } from './tenant-pages.proxy';
import { UpdateTenantPageDto } from '@libs/common';

@Controller('tenant-pages')
export class TenantPagesController {
  constructor(private readonly proxy: TenantPagesProxy) {}

  @Get('tenant/:tenantId')
  getByTenant(@Param('tenantId') tenantId: string) {
    return this.proxy.getByTenant(tenantId);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.proxy.getOne(id);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() dto: UpdateTenantPageDto) {
  //   return this.proxy.update(id, dto);
  // }
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTenantPageDto) {
    return this.proxy.update(id, dto);
  }
}
