import { UpdateTenantPageDto } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TenantPagesProxy {
  constructor(@Inject('TENANT_SERVICE') private readonly client: ClientProxy) {}

  getByTenant(tenantId: string) {
    return firstValueFrom(
      this.client.send({ cmd: 'tenantPages.getByTenant' }, { tenantId }),
    );
  }

  getOne(id: string) {
    return firstValueFrom(
      this.client.send({ cmd: 'tenantPages.getOne' }, { id }),
    );
  }

  update(id: string, dto: UpdateTenantPageDto) {
    return firstValueFrom(
      this.client.send({ cmd: 'tenantPages.update' }, { id, dto }),
    );
  }
}
