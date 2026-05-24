import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ConfigProxy {
  constructor(
    @Inject('TOURNAMENT_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  create(dto: any) {
    return firstValueFrom(this.client.send('config.create', dto));
  }

  find(tournamentId: string) {
    return firstValueFrom(this.client.send('config.find', tournamentId));
  }

  update(tournamentId: string, dto: any) {
    return firstValueFrom(
      this.client.send('config.update', {
        tournamentId,
        dto,
      }),
    );
  }

  remove(tournamentId: string) {
    return firstValueFrom(this.client.send('config.delete', tournamentId));
  }
}
