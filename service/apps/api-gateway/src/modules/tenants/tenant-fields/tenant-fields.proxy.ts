import { UpdateTenantFieldDto } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TenantFieldsProxy {
  constructor(@Inject('TENANT_SERVICE') private readonly client: ClientProxy) {}

  getBySection(tenantSectionId: string) {
    return firstValueFrom(
      this.client.send(
        { cmd: 'tenantFields.getBySection' },
        { tenantSectionId },
      ),
    );
  }

  update(id: string, dto: UpdateTenantFieldDto) {
    return firstValueFrom(
      this.client.send({ cmd: 'tenantFields.update' }, { id, dto }),
    );
  }
}
