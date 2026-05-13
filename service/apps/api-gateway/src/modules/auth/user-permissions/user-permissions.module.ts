import { Module } from '@nestjs/common';
import { UserPermissionsController } from './user-permissions.controller';
import { UserPermissionsProxy } from './user-permissions.proxy';
import { TenantsClientModule } from '@libs/common';

@Module({
  imports: [TenantsClientModule],
  controllers: [UserPermissionsController],
  providers: [UserPermissionsProxy],
})
export class UserPermissionsModule {}
