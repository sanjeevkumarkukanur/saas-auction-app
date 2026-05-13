import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FieldsService } from './fields.service';
import { CreateFieldDto, UpdateFieldDto } from '@libs/common';

@Controller()
export class FieldsController {
  constructor(private readonly fieldsService: FieldsService) {
    console.log('🔥 FieldsMsController LOADED');
  }

  @MessagePattern({ cmd: 'fields.create' })
  create(@Payload() dto: CreateFieldDto) {
    return this.fieldsService.create(dto);
  }

  @MessagePattern({ cmd: 'fields.findBySection' })
  findBySection(@Payload() data: { sectionId: string }) {
    return this.fieldsService.findBySection(data.sectionId);
  }

  @MessagePattern({ cmd: 'fields.update' })
  update(@Payload() data: { id: string; dto: UpdateFieldDto }) {
    return this.fieldsService.update(data.id, data.dto);
  }

  @MessagePattern({ cmd: 'fields.remove' })
  remove(@Payload() data: { id: string }) {
    return this.fieldsService.remove(data.id);
  }
}
