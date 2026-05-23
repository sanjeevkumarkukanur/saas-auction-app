import {
  AssignPlayerTeamDto,
  SERVICES,
  UpdatePlayerTeamDto,
} from '@libs/common';
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PlayerTeamProxy {
  constructor(
    @Inject(SERVICES.PLAYER_SERVICE) private readonly client: ClientProxy,
  ) {}

  assign(dto: AssignPlayerTeamDto) {
    return firstValueFrom(this.client.send('playerTeam.assign', dto));
  }

  update(id: string, dto: UpdatePlayerTeamDto) {
    return firstValueFrom(
      this.client.send('playerTeam.update', {
        id,
        dto,
      }),
    );
  }

  delete(id: string) {
    return firstValueFrom(this.client.send('playerTeam.delete', id));
  }
}
