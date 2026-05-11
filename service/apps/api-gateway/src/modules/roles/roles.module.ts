import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesProxy } from './roles.proxy';
import { TenantsClientModule } from '@app/common';

@Module({
  imports: [TenantsClientModule],
  controllers: [RolesController],
  providers: [RolesProxy],
})
export class RolesModule {}
