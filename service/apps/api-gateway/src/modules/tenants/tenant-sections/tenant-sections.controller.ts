import { Body, Controller, Get, Param, Patch, Put } from '@nestjs/common';
import { TenantSectionsProxy } from './tenant-sections.proxy';
import { UpdateTenantSectionDto } from '@libs/common';

@Controller('tenant-sections')
export class TenantSectionsController {
  constructor(private readonly proxy: TenantSectionsProxy) {}

  @Get('page/:tenantPageId')
  getByPage(@Param('tenantPageId') tenantPageId: string) {
    return this.proxy.getByPage(tenantPageId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTenantSectionDto) {
    return this.proxy.update(id, dto);
  }
}
