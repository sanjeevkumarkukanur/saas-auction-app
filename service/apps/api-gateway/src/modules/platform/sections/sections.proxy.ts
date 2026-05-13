import { CreateSectionDto, UpdateSectionDto } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SectionsProxy {
  constructor(
    @Inject('PLATFORM_SERVICE') private readonly client: ClientProxy,
  ) {}

  create(dto: CreateSectionDto) {
    return firstValueFrom(this.client.send({ cmd: 'sections.create' }, dto));
  }

  findByPage(pageId: string) {
    return firstValueFrom(
      this.client.send({ cmd: 'sections.findByPage' }, { pageId }),
    );
  }

  update(id: string, dto: UpdateSectionDto) {
    return firstValueFrom(
      this.client.send({ cmd: 'sections.update' }, { id, dto }),
    );
  }

  remove(id: string) {
    return firstValueFrom(this.client.send({ cmd: 'sections.remove' }, { id }));
  }
}
