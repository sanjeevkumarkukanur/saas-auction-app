import { AssignPermissionDto, CreateUserRoleDto } from '@app/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RolesProxy {
  constructor(@Inject('TENANT_SERVICE') private readonly client: ClientProxy) {}

  create(dto: CreateUserRoleDto) {
    return firstValueFrom(this.client.send({ cmd: 'roles.create' }, dto));
  }

  getByTenant(tenantId: string) {
    return firstValueFrom(
      this.client.send({ cmd: 'roles.getByTenant' }, { tenantId }),
    );
  }

  assignPermission(roleId: string, dto: AssignPermissionDto) {
    return firstValueFrom(
      this.client.send({ cmd: 'roles.assignPermission' }, { roleId, dto }),
    );
  }
}
