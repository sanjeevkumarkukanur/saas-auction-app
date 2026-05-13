import {
  CreateTeamOwnerDto,
  TeamOwnerFilterDto,
  UpdateTeamOwnerDto,
} from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TeamOwnerProxyService {
  constructor(
    @Inject('TEAM_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  create(dto: CreateTeamOwnerDto) {
    return firstValueFrom(this.client.send('teamOwner.create', dto));
  }

  findAll(query: TeamOwnerFilterDto) {
    return firstValueFrom(this.client.send('teamOwner.findAll', query));
  }

  findById(id: string) {
    return firstValueFrom(this.client.send('teamOwner.findById', id));
  }

  update(id: string, dto: UpdateTeamOwnerDto) {
    return firstValueFrom(
      this.client.send('teamOwner.update', {
        id,
        dto,
      }),
    );
  }

  // 🔥 ownership transfer
  transfer(dto: CreateTeamOwnerDto) {
    return firstValueFrom(this.client.send('teamOwner.transfer', dto));
  }
}
