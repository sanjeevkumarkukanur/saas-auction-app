import { TenantType } from '@libs/common';
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TenantConfigProxy {
  constructor(
    @Inject('PLATFORM_SERVICE') private readonly client: ClientProxy,
  ) {}

  async getTenantTypes() {
    return await firstValueFrom(this.client.send('get_tenant_types', {}));
  }

  async getTenantTypesWithFeatures() {
    return await firstValueFrom(
      this.client.send('get_tenant_types_with_features', {}),
    );
  }

  async getFeatures(type: TenantType) {
    return await firstValueFrom(
      this.client.send('get_tenant_features', { type }),
    );
  }
}
