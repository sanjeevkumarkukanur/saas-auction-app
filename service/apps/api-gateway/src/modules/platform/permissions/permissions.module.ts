import { Module } from '@nestjs/common';
import { PermissionsController } from './permissions.controller';
import { PermissionsProxy } from './permissions.proxy';
import { PlatformClientModule } from '@libs/common';

@Module({
  imports: [PlatformClientModule],
  controllers: [PermissionsController],
  providers: [PermissionsProxy],
})
export class PermissionsModule {}
