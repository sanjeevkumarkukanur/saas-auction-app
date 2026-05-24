import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ConfigService } from './config.service';
import { CreateConfigDto, UpdateConfigDto } from '@libs/common';

@Controller()
export class ConfigController {
  constructor(private readonly service: ConfigService) {}

  @MessagePattern('config.create')
  create(@Payload() dto: CreateConfigDto) {
    return this.service.create(dto);
  }

  @MessagePattern('config.find')
  find(@Payload() tournamentId: string) {
    return this.service.find(tournamentId);
  }

  @MessagePattern('config.update')
  update(
    @Payload()
    payload: {
      tournamentId: string;
      dto: UpdateConfigDto;
    },
  ) {
    return this.service.update(payload.tournamentId, payload.dto);
  }

  @MessagePattern('config.delete')
  remove(@Payload() tournamentId: string) {
    return this.service.remove(tournamentId);
  }
}
