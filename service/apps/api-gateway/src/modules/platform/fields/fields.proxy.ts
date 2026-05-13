import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CreateFieldDto } from './dto/create-fields.dto';
import { UpdateFieldDto } from './dto/update-fields.dto';

@Injectable()
export class FieldsProxy {
  constructor(
    @Inject('PLATFORM_SERVICE') private readonly client: ClientProxy,
  ) {}

  create(dto: CreateFieldDto) {
    return firstValueFrom(this.client.send({ cmd: 'fields.create' }, dto));
  }

  findBySection(sectionId: string) {
    return firstValueFrom(
      this.client.send({ cmd: 'fields.findBySection' }, { sectionId }),
    );
  }

  update(id: string, dto: UpdateFieldDto) {
    return firstValueFrom(
      this.client.send({ cmd: 'fields.update' }, { id, dto }),
    );
  }

  remove(id: string) {
    return firstValueFrom(this.client.send({ cmd: 'fields.remove' }, { id }));
  }
}
