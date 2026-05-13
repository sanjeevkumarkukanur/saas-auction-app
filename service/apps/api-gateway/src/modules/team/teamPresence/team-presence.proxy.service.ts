import { PresenceFilterDto, UpdatePresenceDto } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TeamPresenceProxyService {
  constructor(
    @Inject('TEAM_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  update(dto: UpdatePresenceDto) {
    return firstValueFrom(this.client.send('presence.update', dto));
  }

  offline(seasonTeamId: string) {
    return firstValueFrom(this.client.send('presence.offline', seasonTeamId));
  }

  findAll(filter: PresenceFilterDto) {
    return firstValueFrom(this.client.send('presence.findAll', filter));
  }

  findOne(seasonTeamId: string) {
    return firstValueFrom(this.client.send('presence.findOne', seasonTeamId));
  }
}
