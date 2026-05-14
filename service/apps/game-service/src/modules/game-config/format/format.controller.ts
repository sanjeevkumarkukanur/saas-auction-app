import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FormatService } from './format.service';
import {
  CreateFormatDto,
  FormatFilterDto,
  UpdateFormatDto,
} from '@libs/common';

@Controller()
export class FormatController {
  constructor(private readonly service: FormatService) {}

  @MessagePattern('format.create')
  create(@Payload() dto: CreateFormatDto) {
    return this.service.create(dto);
  }

  @MessagePattern('format.findAll')
  findAll(@Payload() filter: FormatFilterDto) {
    return this.service.findAll(filter || {});
  }

  @MessagePattern('format.findOne')
  findOne(@Payload() id: string) {
    return this.service.findOne(id);
  }

  @MessagePattern('format.update')
  update(
    @Payload()
    payload: {
      id: string;
      data: UpdateFormatDto;
    },
  ) {
    return this.service.update(payload.id, payload.data);
  }
}
