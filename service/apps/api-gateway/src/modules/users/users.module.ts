import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersProxy } from './users.proxy';
import { TenantsClientModule } from '@app/common';

@Module({
  imports: [TenantsClientModule],
  controllers: [UsersController],
  providers: [UsersProxy],
})
export class UsersModule {}
