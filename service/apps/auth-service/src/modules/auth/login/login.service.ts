import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { OtpRepository } from './repositories/otp.repository';
import { LoginDto, SendOtpDto, VerifyOtpDto } from '@libs/common';
import { LoginRepository } from './login.repository';
import { CacheService } from '@libs/radius';
import { UserWithTenant } from '../users/users.repository';

const CacheKeys = {
  userByEmail: (email: string) => `auth:user:email:${email}`,
  playerByPhone: (tenantId: string, phone: string) =>
    `auth:player:${tenantId}:${phone}`,
};

@Injectable()
export class LoginService {
  constructor(
    private readonly authRepo: LoginRepository,
    private readonly otpRepo: OtpRepository,
    private readonly jwtService: JwtService,
    private readonly cache: CacheService,
  ) {}

  async loginWithPassword(dto: LoginDto) {
    const cacheKey = CacheKeys.userByEmail(dto.email);
    let user = await this.cache.get<UserWithTenant>(cacheKey);
    if (!user) {
      user = await this.authRepo.findUserByEmail(dto.email);

      if (user) {
        await this.cache.set(cacheKey, user, 300);
      }
    }

    if (!user || !user.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const ok = await bcrypt.compare(dto.password, user.password);
    if (!ok) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.signToken(user);
  }

  async sendPlayerOtp(dto: SendOtpDto) {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const key = `${dto.tenantId}:${dto.phone}`;

    await this.otpRepo.save(key, otp, 5 * 60 * 1000);

    console.log('OTP for', dto.phone, 'is', otp);

    return { success: true, message: 'OTP sent successfully' };
  }

  async verifyPlayerOtp(dto: VerifyOtpDto) {
    const key = `${dto.tenantId}:${dto.phone}`;
    const valid = await this.otpRepo.isValid(key, dto.otp);

    if (!valid) {
      throw new UnauthorizedException('Invalid or expired OTP');
    }

    await this.otpRepo.delete(key);

    const cacheKey = CacheKeys.playerByPhone(dto.tenantId, dto.phone);

    let player = await this.cache.get<UserWithTenant>(cacheKey);

    if (!player) {
      player = await this.authRepo.findPlayerByPhone(dto.phone, dto.tenantId);

      if (!player) {
        player = await this.authRepo.createPlayer({
          phone: dto.phone,
          tenantId: dto.tenantId,
          role: 'PLAYER',
        });
      }

      await this.cache.set(cacheKey, player, 300);
    }

    return this.signToken(player);
  }

  private signToken(user: UserWithTenant) {
    const payload = {
      sub: user.id,
      tenantId: user.tenantId,
      planId: user.tenant?.planId ?? null,
      role: user.roleRel.name,
    };

    const token = this.jwtService.sign(payload);

    return {
      token,
      user: {
        id: user.id,
        email: user.email ?? null,
        phone: user.phone ?? null,
        role: user.roleRel.name,
        tenantId: user.tenantId ?? null,
        planId: user.tenant?.planId ?? null,
      },
    };
  }
}
