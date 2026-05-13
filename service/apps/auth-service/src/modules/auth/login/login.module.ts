import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { LoginRepository } from './login.repository';
import { OtpRepository } from './repositories/otp.repository';
import { UsersRepository } from '../users/users.repository';
import { PrismaModule } from '../../../prisma/prisma.module';
import { RedisModule } from '@libs/redis';
import { TenantsClientModule } from '@libs/common';

@Module({
  imports: [
    PrismaModule,
    RedisModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default-secret',
      signOptions: { expiresIn: '7d' },
    }),
    TenantsClientModule,
  ],
  controllers: [LoginController],
  providers: [LoginService, LoginRepository, OtpRepository, UsersRepository],
})
export class LoginModule {}
