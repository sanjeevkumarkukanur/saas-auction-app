import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleProxyService } from './role.proxy.service';
import { GamesClientModule } from '@libs/common';

@Module({
  imports: [GamesClientModule],
  controllers: [RoleController],
  providers: [RoleProxyService],
})
export class RoleModule {}
