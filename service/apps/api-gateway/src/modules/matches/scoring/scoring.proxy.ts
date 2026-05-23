import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { ApproveScoreDto, SubmitScoreDto } from '@libs/common';

@Injectable()
export class ScoringProxy {
  constructor(@Inject('MATCH_SERVICE') private readonly client: ClientProxy) {}

  submit(dto: SubmitScoreDto) {
    return this.client.send('score.submit', dto);
  }

  approve(dto: ApproveScoreDto) {
    return this.client.send('score.approve', dto);
  }

  findOne(matchId: string, teamId: string) {
    return this.client.send('score.findOne', {
      matchId,
      teamId,
    });
  }
}
