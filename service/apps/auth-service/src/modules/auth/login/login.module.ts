import { Module } from '@nestjs/common';
import { OtpRepository } from './repositories/otp.repository';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { JwtModule } from '@nestjs/jwt';
import { LoginRepository } from './login.repository';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService, LoginRepository, OtpRepository],
  exports: [LoginService],
})
export class LoginModule {}
