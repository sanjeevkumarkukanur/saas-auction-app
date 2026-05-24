import { CreateStageDto, UpdateStageDto } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class StageProxy {
  constructor(
    @Inject('TOURNAMENT_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  create(dto: CreateStageDto) {
    return firstValueFrom(this.client.send('stage.create', dto));
  }

  findByTournament(tournamentId: string) {
    return firstValueFrom(
      this.client.send('stage.findByTournament', tournamentId),
    );
  }

  findOne(id: string) {
    return firstValueFrom(this.client.send('stage.findOne', id));
  }

  update(id: string, dto: UpdateStageDto) {
    return firstValueFrom(
      this.client.send('stage.update', {
        id,
        dto,
      }),
    );
  }

  remove(id: string) {
    return firstValueFrom(this.client.send('stage.delete', id));
  }
}
