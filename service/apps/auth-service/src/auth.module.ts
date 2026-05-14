import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { LoginModule } from './modules/auth/login/login.module';
import { RolesModule } from './modules/auth/roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'apps/auth-service/.env',
    }),
    LoginModule,
    RolesModule,
  ],
})
export class AuthModule {}
