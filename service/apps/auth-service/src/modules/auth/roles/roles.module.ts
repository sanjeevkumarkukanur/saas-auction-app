import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesRepository } from './roles.repository';
import { UserPermissionsModule } from '../user-permissions/user-permissions.module';
import { PrismaModule } from 'apps/auth-service/src/prisma/prisma.module';
import { RolesController } from './roles.controller';

@Module({
  imports: [
    PrismaModule,
    UserPermissionsModule, // optional now, useful later for guards/validation
  ],
  controllers: [RolesController],
  providers: [RolesService, RolesRepository],
  exports: [RolesRepository], // export if User/Auth needs it later
})
export class RolesModule {}
