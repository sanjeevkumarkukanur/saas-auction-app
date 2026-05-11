import { Module } from '@nestjs/common';
import { LoginModule } from './modules/auth/login/login.module';
import { RolesModule } from './modules/auth/roles/roles.module';

@Module({
  imports: [LoginModule, RolesModule],
})
export class AuthServiceModule {}
