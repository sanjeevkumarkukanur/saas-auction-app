import { CreatePermissionDto } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PermissionsProxy {
  constructor(
    @Inject('PLATFORM_SERVICE') private readonly client: ClientProxy,
  ) {}

  create(dto: CreatePermissionDto) {
    return firstValueFrom(this.client.send({ cmd: 'permissions.create' }, dto));
  }

  findAll() {
    return firstValueFrom(this.client.send({ cmd: 'permissions.findAll' }, {}));
  }
}
