import { UpdateTenantSectionDto } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TenantSectionsProxy {
  constructor(@Inject('TENANT_SERVICE') private readonly client: ClientProxy) {}

  getByPage(tenantPageId: string) {
    return firstValueFrom(
      this.client.send({ cmd: 'tenantSections.getByPage' }, { tenantPageId }),
    );
  }

  update(id: string, dto: UpdateTenantSectionDto) {
    return firstValueFrom(
      this.client.send({ cmd: 'tenantSections.update' }, { id, dto }),
    );
  }
}
