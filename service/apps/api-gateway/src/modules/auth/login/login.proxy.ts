// apps/api-gateway/src/modules/auth/auth.proxy.service.ts

import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { LoginDto, SendOtpDto, VerifyOtpDto } from '@libs/common';
import { rpcCall } from '@libs/auth';

@Injectable()
export class LoginProxy {
  constructor(
    @Inject('AUTH_SERVICE')
    private readonly authClient: ClientProxy,
  ) {}

  async loginWithPassword(dto: LoginDto) {
    return rpcCall(this.authClient, { cmd: 'auth.login.password' }, dto);
  }

  async sendPlayerOtp(dto: SendOtpDto) {
    return rpcCall(this.authClient, { cmd: 'auth.player.sendOtp' }, dto);
  }

  async verifyPlayerOtp(dto: VerifyOtpDto) {
    return rpcCall(this.authClient, { cmd: 'auth.player.verifyOtp' }, dto);
  }
}
