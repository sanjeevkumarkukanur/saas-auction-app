import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GameModule } from './modules/game/game.module';
import { TenantGameModule } from './modules/tenant-game/tenant-game.module';
import { FormatModule } from './modules/game-config/format/format.module';
import { CategoryModule } from './modules/game-config/category/category.module';
import { RoleModule } from './modules/game-config/role/role.module';
import { RuleModule } from './modules/game-config/rule/rule.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'apps/game-service/.env',
    }),
    PrismaModule,
    GameModule,
    TenantGameModule,
    FormatModule,
    CategoryModule,
    RoleModule,
    RuleModule,
  ],
})
export class GameServiceModule {}
