import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  CreateMatchDto,
  ScheduleMatchDto,
  UpdateMatchDto,
  UpdateStatusDto,
} from '@libs/common';

@Injectable()
export class MatchProxy {
  constructor(@Inject('MATCH_SERVICE') private readonly client: ClientProxy) {}

  create(dto: CreateMatchDto) {
    return this.client.send('match.create', dto);
  }

  findAll() {
    return this.client.send('match.findAll', {});
  }

  findOne(id: string) {
    return this.client.send('match.findById', id);
  }

  update(id: string, dto: UpdateMatchDto) {
    return this.client.send('match.update', {
      id,
      ...dto,
    });
  }

  schedule(id: string, dto: ScheduleMatchDto) {
    return this.client.send('match.schedule', {
      id,
      ...dto,
    });
  }

  updateStatus(id: string, dto: UpdateStatusDto) {
    return this.client.send('match.updateStatus', {
      id,
      ...dto,
    });
  }

  remove(id: string) {
    return this.client.send('match.delete', id);
  }
}
