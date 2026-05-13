import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, tap } from 'rxjs';

interface LoggingRequest extends Request {
  tenantId?: string;
}

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const req = context.switchToHttp().getRequest<LoggingRequest>();
    const res = context.switchToHttp().getResponse<Response>();
    const { method, url } = req;
    const tenantId = req.tenantId ?? 'no-tenant';
    const now = Date.now();

    return next.handle().pipe(
      tap({
        next: () => {
          const duration = Date.now() - now;
          this.logger.log(
            `[${tenantId}] ${method} ${url} → ${res.statusCode} (${duration}ms)`,
          );
        },
        error: (err: Error) => {
          const duration = Date.now() - now;
          const status = err instanceof HttpException ? err.getStatus() : 500;
          this.logger.error(
            `[${tenantId}] ${method} ${url} → ${status} (${duration}ms) ${err.message}`,
          );
        },
      }),
    );
  }
}
