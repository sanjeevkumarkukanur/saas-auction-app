import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MatchService } from './match.service';

@Controller()
export class MatchMsController {
  constructor(private readonly service: MatchService) {}

  @MessagePattern('match.findById')
  findById(@Payload() id: string) {
    return this.service.findOne(id);
  }

  @MessagePattern('match.create')
  create(@Payload() dto: any) {
    return this.service.create(dto);
  }
}
