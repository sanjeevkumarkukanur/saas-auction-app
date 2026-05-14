import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CreateRoleDto, UpdateRoleDto, RoleFilterDto } from '@libs/common';
@Injectable()
export class RoleProxyService {
  constructor(@Inject('GAME_SERVICE') private readonly client: ClientProxy) {}

  createRole(data: CreateRoleDto) {
    return lastValueFrom(this.client.send('role.create', data));
  }

  getRoles(filter: RoleFilterDto) {
    return lastValueFrom(this.client.send('role.findAll', filter));
  }

  getRoleById(id: string) {
    return lastValueFrom(this.client.send('role.findOne', id));
  }

  updateRole(id: string, data: UpdateRoleDto) {
    return lastValueFrom(this.client.send('role.update', { id, data }));
  }
}
