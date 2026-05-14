import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CreateRuleDto, UpdateRuleDto, RuleFilterDto } from '@libs/common';

@Injectable()
export class RuleProxyService {
  constructor(@Inject('GAME_SERVICE') private readonly client: ClientProxy) {}

  createRule(data: CreateRuleDto) {
    return lastValueFrom(this.client.send('rule.create', data));
  }

  getRules(filter: RuleFilterDto) {
    return lastValueFrom(this.client.send('rule.findAll', filter));
  }

  getRuleById(id: string) {
    return lastValueFrom(this.client.send('rule.findOne', id));
  }

  updateRule(id: string, data: UpdateRuleDto) {
    return lastValueFrom(this.client.send('rule.update', { id, data }));
  }
}
