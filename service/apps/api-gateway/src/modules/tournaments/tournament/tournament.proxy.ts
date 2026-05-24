import { CreateTournamentDto, UpdateTournamentDto } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TournamentProxy {
  constructor(
    @Inject('TOURNAMENT_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  create(dto: CreateTournamentDto) {
    return firstValueFrom(this.client.send('tournament.create', dto));
  }

  findAll() {
    return firstValueFrom(this.client.send('tournament.findAll', {}));
  }

  findOne(id: string) {
    return firstValueFrom(this.client.send('tournament.findOne', id));
  }

  update(id: string, dto: UpdateTournamentDto) {
    return firstValueFrom(
      this.client.send('tournament.update', {
        id,
        dto,
      }),
    );
  }

  remove(id: string) {
    return firstValueFrom(this.client.send('tournament.delete', id));
  }
}
