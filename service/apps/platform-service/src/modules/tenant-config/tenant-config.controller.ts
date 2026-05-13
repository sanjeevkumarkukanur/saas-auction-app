import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TenantConfigService } from './tenant-config.service';
import { TenantType } from '@libs/common';
@Controller()
export class TenantConfigController {
  constructor(private readonly service: TenantConfigService) {}

  @MessagePattern('get_tenant_types')
  getTenantTypes() {
    return this.service.getTenantTypes();
  }

  @MessagePattern('get_tenant_types_with_features')
  getTenantTypesWithFeatures() {
    return this.service.getTenantTypesWithFeatures();
  }

  @MessagePattern('get_tenant_features')
  getFeatures(@Payload() data: { type: TenantType }) {
    return this.service.getFeaturesByType(data.type);
  }
}
