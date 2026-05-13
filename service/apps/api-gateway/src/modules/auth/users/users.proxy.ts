import { CreateUserDto, UpdateUserDto } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UsersProxy {
  constructor(@Inject('TENANT_SERVICE') private readonly client: ClientProxy) {}

  create(currentUser: any, dto: CreateUserDto) {
    return firstValueFrom(
      this.client.send({ cmd: 'users.create' }, { currentUser, dto }),
    );
  }

  list(currentUser: any) {
    return firstValueFrom(
      this.client.send({ cmd: 'users.list' }, { currentUser }),
    );
  }

  update(currentUser: any, userId: string, dto: UpdateUserDto) {
    return firstValueFrom(
      this.client.send({ cmd: 'users.update' }, { currentUser, userId, dto }),
    );
  }

  delete(currentUser: any, userId: string) {
    return firstValueFrom(
      this.client.send({ cmd: 'users.delete' }, { currentUser, userId }),
    );
  }
}
