import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SeasonService } from './season.service';
import { CreateSeasonDto, SeasonFilterDto, UpdateSeasonDto } from '@app/common';

@Controller()
export class SeasonMsController {
  constructor(private readonly service: SeasonService) {}

  @MessagePattern('season.create')
  create(@Payload() dto: CreateSeasonDto) {
    return this.service.create(dto);
  }

  @MessagePattern('season.findAll')
  findAll(@Payload() filter: SeasonFilterDto) {
    return this.service.findAll(filter);
  }

  @MessagePattern('season.findOne')
  findOne(@Payload() id: string) {
    return this.service.findOne(id);
  }

  @MessagePattern('season.update')
  update(
    @Payload()
    data: {
      id: string;
      dto: UpdateSeasonDto;
    },
  ) {
    return this.service.update(data.id, data.dto);
  }

  @MessagePattern('season.delete')
  remove(@Payload() id: string) {
    return this.service.remove(id);
  }
}
