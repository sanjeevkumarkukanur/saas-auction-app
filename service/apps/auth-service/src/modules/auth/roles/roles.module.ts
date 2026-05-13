import { Module } from '@nestjs/common';

import { RolesService } from './roles.service';
import { RolesRepository } from './roles.repository';
import { RolesController } from './roles.controller';

import { UserPermissionsModule } from '../user-permissions/user-permissions.module';
import { RedisModule } from '@libs/redis';
import { PrismaModule } from '../../../prisma/prisma.module';

@Module({
  imports: [PrismaModule, RedisModule, UserPermissionsModule],
  controllers: [RolesController],
  providers: [RolesService, RolesRepository],
  exports: [RolesRepository],
})
export class RolesModule {}
