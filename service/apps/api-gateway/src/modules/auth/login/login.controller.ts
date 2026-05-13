// apps/api-gateway/src/modules/auth/auth.controller.ts

import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { LoginDto, SendOtpDto, VerifyOtpDto } from '@libs/common';
import { LoginProxy } from './login.proxy';

@ApiTags('Auth')
@Controller('auth')
export class LoginController {
  constructor(private readonly authProxy: LoginProxy) {}

  @Post('login')
  loginWithPassword(@Body() dto: LoginDto) {
    return this.authProxy.loginWithPassword(dto);
  }

  @Post('player/send-otp')
  sendPlayerOtp(@Body() dto: SendOtpDto) {
    return this.authProxy.sendPlayerOtp(dto);
  }

  @Post('player/verify-otp')
  verifyPlayerOtp(@Body() dto: VerifyOtpDto) {
    return this.authProxy.verifyPlayerOtp(dto);
  }
}
