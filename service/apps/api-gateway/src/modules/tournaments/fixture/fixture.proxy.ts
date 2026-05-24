import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class FixtureProxy {
  constructor(
    @Inject('TOURNAMENT_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  generate(dto: any) {
    return firstValueFrom(this.client.send('fixture.generate', dto));
  }

  findByStage(stageId: string) {
    return firstValueFrom(this.client.send('fixture.findByStage', stageId));
  }

  findByGroup(groupId: string) {
    return firstValueFrom(this.client.send('fixture.findByGroup', groupId));
  }
}
