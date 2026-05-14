import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import {
  AssignGameDto,
  TenantGameFilterDto,
  UpdateTenantGameDto,
} from '@libs/common';

@Injectable()
export class TenantGameProxyService {
  constructor(@Inject('GAME_SERVICE') private readonly client: ClientProxy) {}

  assignGame(data: AssignGameDto) {
    return lastValueFrom(this.client.send('tenantGame.assign', data));
  }

  getTenantGames(filter: TenantGameFilterDto) {
    return lastValueFrom(this.client.send('tenantGame.findAll', filter));
  }

  getTenantGameById(id: string) {
    return lastValueFrom(this.client.send('tenantGame.findOne', id));
  }

  updateTenantGame(id: string, data: UpdateTenantGameDto) {
    return lastValueFrom(this.client.send('tenantGame.update', { id, data }));
  }
}
