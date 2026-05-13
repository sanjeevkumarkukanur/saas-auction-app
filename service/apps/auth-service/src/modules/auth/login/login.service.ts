import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import * as bcrypt from 'bcrypt';
import { LoginDto, SendOtpDto, VerifyOtpDto } from '@libs/common';
import { CacheService } from '@libs/redis';
import { OtpRepository } from './repositories/otp.repository';
import { LoginRepository } from './login.repository';
import { UserWithRole } from '../users/users.repository';

const CacheKeys = {
  userByEmail: (email: string) => `auth:user:email:${email}`,
  playerByPhone: (countryCode: string, phone: string) =>
    `auth:player:phone:${countryCode}:${phone}`,
  tenantById: (tenantId: string) => `auth:tenant:${tenantId}`,
};

@Injectable()
export class LoginService {
  constructor(
    private readonly authRepo: LoginRepository,
    private readonly otpRepo: OtpRepository,
    private readonly jwtService: JwtService,
    private readonly cache: CacheService,
    @Inject('TENANT_SERVICE')
    private readonly tenantClient: ClientProxy,
  ) {}

  // ──── OWNER / ADMIN / STAFF LOGIN (email + password) ────
  async loginWithPassword(dto: LoginDto) {
    try {
      const cacheKey = CacheKeys.userByEmail(dto.email);
      let user = await this.cache.get<UserWithRole>(cacheKey);

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

      return this.signStaffToken(user);
    } catch (error: any) {
      console.error('loginWithPassword error:', error);
      throw new RpcException({
        status: 'error',
        message: error?.message || 'Login failed',
      });
    }
  }

  // ──── PLAYER LOGIN (phone + OTP) ────
  async sendPlayerOtp(dto: SendOtpDto) {
    try {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const key = `otp:${dto.countryCode}:${dto.phone}`;

      await this.otpRepo.save(key, otp, 5 * 60 * 1000);
      console.log('OTP for', dto.countryCode, dto.phone, 'is', otp);

      return { success: true, message: 'OTP sent successfully' };
    } catch (error: any) {
      console.error('sendPlayerOtp error:', error);
      throw new RpcException({
        status: 'error',
        message: error?.message || 'Failed to send OTP',
      });
    }
  }

  async verifyPlayerOtp(dto: VerifyOtpDto) {
    try {
      const key = `otp:${dto.countryCode}:${dto.phone}`;
      const valid = await this.otpRepo.isValid(key, dto.otp);

      if (!valid) {
        throw new UnauthorizedException('Invalid or expired OTP');
      }

      await this.otpRepo.delete(key);

      const cacheKey = CacheKeys.playerByPhone(dto.countryCode, dto.phone);
      let player = await this.cache.get<UserWithRole>(cacheKey);

      if (!player) {
        player = await this.authRepo.findPlayerByPhone(
          dto.countryCode,
          dto.phone,
        );

        if (!player) {
          player = await this.authRepo.createPlayer({
            countryCode: dto.countryCode,
            phone: dto.phone,
            role: 'PLAYER',
          });
        }

        await this.cache.set(cacheKey, player, 300);
      }

      return this.signPlayerToken(player);
    } catch (error: any) {
      console.error('verifyPlayerOtp error:', error);
      throw new RpcException({
        status: 'error',
        message: error?.message || 'OTP verification failed',
      });
    }
  }

  // ──── TOKEN SIGNING ────

  private async signStaffToken(user: UserWithRole) {
    let planId: string | null = null;

    if (user.tenantId) {
      const tenant = await this.getTenant(user.tenantId);
      planId = tenant?.planId ?? null;
    }

    const payload = {
      sub: user.id,
      tenantId: user.tenantId,
      planId,
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
        planId,
      },
    };
  }

  private signPlayerToken(player: UserWithRole) {
    const payload = {
      sub: player.id,
      role: 'PLAYER',
    };

    const token = this.jwtService.sign(payload);

    return {
      token,
      user: {
        id: player.id,
        countryCode: player.countryCode ?? null,
        phone: player.phone ?? null,
        name: player.name ?? null,
        role: 'PLAYER',
      },
    };
  }

  // ──── HELPERS ────

  private async getTenant(
    tenantId: string,
  ): Promise<{ planId: string | null } | null> {
    const cacheKey = CacheKeys.tenantById(tenantId);
    let tenant = await this.cache.get<{ planId: string | null }>(cacheKey);

    if (tenant) return tenant;

    try {
      tenant = await firstValueFrom(
        this.tenantClient.send({ cmd: 'tenant.findById' }, { id: tenantId }),
      );
      if (tenant) {
        await this.cache.set(cacheKey, tenant, 600);
      }
      return tenant;
    } catch (error) {
      console.error('getTenant error:', error);
      return null;
    }
  }
}
