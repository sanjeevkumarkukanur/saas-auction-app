import { Module } from '@nestjs/common';
import { GameModule } from './game/game.module';
import { TenantGameModule } from './tenant-game/tenant-game.module';
import { FormatModule } from './format/format.module';
import { CategoryModule } from './category/category.module';
import { RoleModule } from './role/role.module';
import { RuleModule } from './rule/rule.module';

@Module({
  imports: [
    GameModule,
    TenantGameModule,
    FormatModule,
    CategoryModule,
    RoleModule,
    RuleModule,
  ],
})
export class GamesModule {}
