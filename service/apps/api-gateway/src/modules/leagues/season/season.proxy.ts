import { Inject, Injectable } from '@nestjs/common';

import { ClientProxy } from '@nestjs/microservices';

import {
  CreateSeasonDto,
  SeasonFilterDto,
  SERVICES,
  UpdateSeasonDto,
} from '@libs/common';
import { rpcCall } from '@libs/auth';

@Injectable()
export class SeasonProxy {
  constructor(
    @Inject(SERVICES.LEAGUE_SERVICE as string)
    private readonly client: ClientProxy,
  ) {}

  create(data: CreateSeasonDto) {
    return rpcCall(this.client, { cmd: 'season.create' }, data);
  }

  findAll(filter: SeasonFilterDto) {
    return rpcCall(this.client, { cmd: 'season.findAll' }, filter);
  }

  findOne(id: string) {
    return rpcCall(this.client, { cmd: 'season.findOne' }, id);
  }

  update(id: string, dto: UpdateSeasonDto) {
    return rpcCall(this.client, { cmd: 'season.update' }, { id, dto });
  }

  delete(id: string) {
    return rpcCall(this.client, { cmd: 'season.delete' }, id);
  }
}
