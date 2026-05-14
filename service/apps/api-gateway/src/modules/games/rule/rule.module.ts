import { Module } from '@nestjs/common';
import { RuleController } from './rule.controller';
import { RuleProxyService } from './rule.proxy.service';
import { GamesClientModule } from '@libs/common';

@Module({
  imports: [GamesClientModule],
  controllers: [RuleController],
  providers: [RuleProxyService],
})
export class RuleModule {}
