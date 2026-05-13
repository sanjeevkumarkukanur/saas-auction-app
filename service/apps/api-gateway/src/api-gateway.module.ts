import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { TenantsModule } from './modules/tenants/tenants.module';
import { PlatformModule } from './modules/platform/platform.module';
import { TeamsModule } from './modules/team/teams.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PlatformModule,
    TenantsModule,
    TeamsModule,
  ],
})
export class ApiGatewayModule {}
