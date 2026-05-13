import { Controller, Get, Param } from '@nestjs/common';
import { TenantConfigProxy } from './tenant-config.proxy';
import { ParseEnumPipe } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger/dist/decorators/api-operation.decorator';
import { TenantType } from '@libs/common';

@Controller('tenant-config')
export class TenantConfigController {
  constructor(private readonly proxy: TenantConfigProxy) {}

  @Get('types')
  getTenantTypes() {
    return this.proxy.getTenantTypes();
  }

  @Get('types-with-features')
  @ApiOperation({ summary: 'Get tenant types with features' })
  getTenantTypesWithFeatures() {
    return this.proxy.getTenantTypesWithFeatures();
  }

  @Get('features/:type')
  getFeatures(@Param('type', new ParseEnumPipe(TenantType)) type: TenantType) {
    return this.proxy.getFeatures(type);
  }
}
