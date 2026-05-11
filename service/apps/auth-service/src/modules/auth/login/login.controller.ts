import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { LoginDto, SendOtpDto, VerifyOtpDto } from '@libs/common';
import { LoginService } from './login.service';

@Controller()
export class LoginController {
  constructor(private readonly authService: LoginService) {}

  @MessagePattern({ cmd: 'auth.login.password' })
  loginWithPassword(@Payload() dto: LoginDto) {
    return this.authService.loginWithPassword(dto);
  }

  @MessagePattern({ cmd: 'auth.player.sendOtp' })
  sendPlayerOtp(@Payload() dto: SendOtpDto) {
    return this.authService.sendPlayerOtp(dto);
  }

  @MessagePattern({ cmd: 'auth.player.verifyOtp' })
  verifyPlayerOtp(@Payload() dto: VerifyOtpDto) {
    return this.authService.verifyPlayerOtp(dto);
  }
}
