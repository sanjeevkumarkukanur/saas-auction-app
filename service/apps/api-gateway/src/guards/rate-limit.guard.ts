import {
  CanActivate,
  ExecutionContext,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request } from 'express';
import { RedisService } from '@libs/redis';

@Injectable()
export class RateLimitGuard implements CanActivate {
  constructor(private readonly redisService: RedisService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const ip = request.ip ?? request.socket?.remoteAddress ?? 'unknown';
    const email = (request.body as { email?: string })?.email ?? 'unknown';
    const key = `rate:login:${email}:${ip}`;
    const attempts = (await this.redisService.get<number>(key)) ?? 0;

    if (attempts >= 5) {
      throw new HttpException(
        'Too many attempts. Try again later.',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    await this.redisService.set(key, attempts + 1, 60);
    return true;
  }
}
