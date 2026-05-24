import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FixtureService } from './fixture.service';
import { GenerateFixtureDto } from '@libs/common';

@Controller()
export class FixtureMsController {
  constructor(private readonly service: FixtureService) {}

  @MessagePattern('fixture.generate')
  generate(@Payload() dto: GenerateFixtureDto) {
    return this.service.generateRoundRobin(dto);
  }

  @MessagePattern('fixture.findByStage')
  findByStage(@Payload() stageId: string) {
    return this.service.findByStage(stageId);
  }

  @MessagePattern('fixture.findByGroup')
  findByGroup(@Payload() groupId: string) {
    return this.service.findByGroup(groupId);
  }
}
