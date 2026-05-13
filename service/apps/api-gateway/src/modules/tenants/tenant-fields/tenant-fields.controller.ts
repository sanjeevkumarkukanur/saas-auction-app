import { Body, Controller, Get, Param, Patch, Put } from '@nestjs/common';
import { TenantFieldsProxy } from './tenant-fields.proxy';
import { UpdateTenantFieldDto } from '@libs/common';

@Controller('tenant-fields')
export class TenantFieldsController {
  constructor(private readonly proxy: TenantFieldsProxy) {}

  @Get('section/:tenantSectionId')
  getBySection(@Param('tenantSectionId') tenantSectionId: string) {
    return this.proxy.getBySection(tenantSectionId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTenantFieldDto) {
    return this.proxy.update(id, dto);
  }
}
