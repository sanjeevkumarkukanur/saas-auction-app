import { Module } from '@nestjs/common';
import { RuleController } from './rule.controller';
import { RuleService } from './rule.service';
import { RuleRepository } from './rule.repository';

@Module({
  controllers: [RuleController],
  providers: [RuleService, RuleRepository],
  exports: [RuleService],
})
export class RuleModule {}
