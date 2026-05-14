import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RuleService } from './rule.service';
import { CreateRuleDto, RuleFilterDto, UpdateRuleDto } from '@libs/common';

@Controller()
export class RuleController {
  constructor(private readonly service: RuleService) {}

  @MessagePattern('rule.create')
  create(@Payload() dto: CreateRuleDto) {
    return this.service.create(dto);
  }

  @MessagePattern('rule.findAll')
  findAll(@Payload() filter: RuleFilterDto) {
    return this.service.findAll(filter || {});
  }

  @MessagePattern('rule.findOne')
  findOne(@Payload() id: string) {
    return this.service.findOne(id);
  }

  @MessagePattern('rule.update')
  update(
    @Payload()
    payload: {
      id: string;
      data: UpdateRuleDto;
    },
  ) {
    return this.service.update(payload.id, payload.data);
  }
}
