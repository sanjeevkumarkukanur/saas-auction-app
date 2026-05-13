import { CreatePageDto, UpdatePageDto } from '@libs/common';
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PagesProxy {
  constructor(
    @Inject('PLATFORM_SERVICE') private readonly client: ClientProxy,
  ) {}

  findAll() {
    return firstValueFrom(this.client.send({ cmd: 'pages.findAll' }, {}));
  }

  findOne(id: string) {
    return firstValueFrom(this.client.send({ cmd: 'pages.findOne' }, { id }));
  }

  create(dto: CreatePageDto) {
    return firstValueFrom(this.client.send({ cmd: 'pages.create' }, dto));
  }

  update(id: string, dto: UpdatePageDto) {
    return firstValueFrom(
      this.client.send({ cmd: 'pages.update' }, { id, dto }),
    );
  }

  remove(id: string) {
    return firstValueFrom(this.client.send({ cmd: 'pages.remove' }, { id }));
  }
}
