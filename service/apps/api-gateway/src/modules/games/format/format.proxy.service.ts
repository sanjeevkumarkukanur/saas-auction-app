import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import {
  FormatFilterDto,
  CreateFormatDto,
  UpdateFormatDto,
} from '@libs/common';

@Injectable()
export class FormatProxyService {
  constructor(@Inject('GAME_SERVICE') private readonly client: ClientProxy) {}

  createFormat(data: CreateFormatDto) {
    return lastValueFrom(this.client.send('format.create', data));
  }

  getFormats(filter: FormatFilterDto) {
    return lastValueFrom(this.client.send('format.findAll', filter));
  }

  getFormatById(id: string) {
    return lastValueFrom(this.client.send('format.findOne', id));
  }

  updateFormat(id: string, data: UpdateFormatDto) {
    return lastValueFrom(this.client.send('format.update', { id, data }));
  }
}
