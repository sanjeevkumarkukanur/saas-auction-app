import { CreateTimelineDto } from '@libs/common';
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TimelineProxy {
  constructor(@Inject('MATCH_SERVICE') private readonly client: ClientProxy) {}

  add(dto: CreateTimelineDto) {
    return this.client.send('timeline.add', dto);
  }

  findByMatch(matchId: string) {
    return this.client.send('timeline.findByMatch', matchId);
  }

  clear(matchId: string) {
    return this.client.send('timeline.clear', matchId);
  }
}
