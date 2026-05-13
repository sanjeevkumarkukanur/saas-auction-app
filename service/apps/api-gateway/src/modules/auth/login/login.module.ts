// apps/api-gateway/src/modules/auth/login/login.module.ts

import { Module } from '@nestjs/common';
import { LoginProxy } from './login.proxy';
import { LoginController } from './login.controller';
import { AuthClientModule } from '@libs/common';

@Module({
  imports: [AuthClientModule],
  controllers: [LoginController],
  providers: [LoginProxy],
  exports: [LoginProxy],
})
export class LoginModule {}
