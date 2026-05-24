import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { StageService } from './stage.service';
import { CreateStageDto, UpdateStageDto } from '@libs/common';

@Controller()
export class StageController {
  constructor(private readonly service: StageService) {}

  @MessagePattern('stage.create')
  create(@Payload() dto: CreateStageDto) {
    return this.service.create(dto);
  }

  @MessagePattern('stage.findByTournament')
  findByTournament(@Payload() tournamentId: string) {
    return this.service.findByTournament(tournamentId);
  }

  @MessagePattern('stage.findOne')
  findOne(@Payload() id: string) {
    return this.service.findOne(id);
  }

  @MessagePattern('stage.update')
  update(
    @Payload()
    data: {
      id: string;
      dto: UpdateStageDto;
    },
  ) {
    return this.service.update(data.id, data.dto);
  }

  @MessagePattern('stage.delete')
  remove(@Payload() id: string) {
    return this.service.remove(id);
  }
}
