import { SetUserPermissionDto } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UserPermissionsProxy {
  constructor(@Inject('TENANT_SERVICE') private readonly client: ClientProxy) {}

  setPermission(userId: string, dto: SetUserPermissionDto) {
    return firstValueFrom(
      this.client.send({ cmd: 'userPermissions.set' }, { userId, dto }),
    );
  }

  removePermission(userId: string, permissionId: string) {
    return firstValueFrom(
      this.client.send(
        { cmd: 'userPermissions.remove' },
        { userId, permissionId },
      ),
    );
  }

  getByUser(userId: string) {
    return firstValueFrom(
      this.client.send({ cmd: 'userPermissions.getByUser' }, { userId }),
    );
  }
}
