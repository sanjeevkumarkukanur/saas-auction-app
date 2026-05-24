import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { QualifyStageDto } from '@libs/common';
import { QualificationService } from './qualification.service';

@Controller()
export class QualificationMsController {
  constructor(private readonly service: QualificationService) {}

  @MessagePattern('qualification.stage')
  qualify(@Payload() dto: QualifyStageDto) {
    return this.service.qualify(dto);
  }
}
