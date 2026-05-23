import { CreateTenantPlayerDto, UpdateTenantPlayerDto } from '@libs/common';
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TenantPlayerProxy {
  constructor(@Inject('PLAYER_SERVICE') private readonly client: ClientProxy) {}

  create(dto: CreateTenantPlayerDto) {
    return firstValueFrom(this.client.send('tenantPlayer.create', dto));
  }

  findByTenant(tenantId: string) {
    return firstValueFrom(
      this.client.send('tenantPlayer.findByTenant', tenantId),
    );
  }

  update(id: string, dto: UpdateTenantPlayerDto) {
    return firstValueFrom(
      this.client.send('tenantPlayer.update', {
        id,
        dto,
      }),
    );
  }

  delete(id: string) {
    return firstValueFrom(this.client.send('tenantPlayer.delete', id));
  }
}
