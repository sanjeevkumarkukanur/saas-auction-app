import { AssignTeamDto, CreateGroupDto, UpdateGroupDto } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GroupProxy {
  constructor(
    @Inject('TOURNAMENT_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  create(dto: CreateGroupDto) {
    return firstValueFrom(this.client.send('group.create', dto));
  }

  findByStage(stageId: string) {
    return firstValueFrom(this.client.send('group.findByStage', stageId));
  }

  findOne(id: string) {
    return firstValueFrom(this.client.send('group.findOne', id));
  }

  update(id: string, dto: UpdateGroupDto) {
    return firstValueFrom(this.client.send('group.update', { id, dto }));
  }

  remove(id: string) {
    return firstValueFrom(this.client.send('group.delete', id));
  }

  assignTeam(dto: AssignTeamDto) {
    return firstValueFrom(this.client.send('group.assignTeam', dto));
  }
}
