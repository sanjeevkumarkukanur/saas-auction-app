import { Injectable, BadRequestException } from '@nestjs/common';
import { TENANT_TYPES } from '../../../prisma/seeds/tenant-types.seed';
import {
  TENANT_FEATURES,
  TenantType,
} from '../../../prisma/seeds/tenant-features.seed';

@Injectable()
export class TenantConfigService {
  getTenantTypes() {
    return TENANT_TYPES;
  }

  getTenantTypesWithFeatures() {
    return TENANT_TYPES.map((tenant) => ({
      ...tenant,
      features: TENANT_FEATURES[tenant.type as TenantType],
    }));
  }

  getFeaturesByType(type: TenantType) {
    const features = TENANT_FEATURES[type];

    if (!features) {
      throw new BadRequestException('Invalid tenant type');
    }

    return features;
  }
}
