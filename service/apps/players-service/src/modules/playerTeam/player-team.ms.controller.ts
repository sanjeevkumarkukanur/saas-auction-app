import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PlayerTeamService } from './player-team.service';
import { AssignPlayerTeamDto, UpdatePlayerTeamDto } from '@app/common';

@Controller()
export class PlayerTeamMsController {
  constructor(private readonly service: PlayerTeamService) {}

  @MessagePattern('playerTeam.assign')
  assign(@Payload() dto: AssignPlayerTeamDto) {
    return this.service.assign(dto);
  }

  @MessagePattern('playerTeam.update')
  update(
    @Payload()
    data: {
      id: string;
      dto: UpdatePlayerTeamDto;
    },
  ) {
    return this.service.update(data.id, data.dto);
  }

  @MessagePattern('playerTeam.delete')
  remove(@Payload() id: string) {
    return this.service.remove(id);
  }
}
