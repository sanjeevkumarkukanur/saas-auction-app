import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const { method, url } = req;
    const tenantId = req.tenantId || 'no-tenant';
    const now = Date.now();

    return next.handle().pipe(
      tap({
        next: () => {
          const res = context.switchToHttp().getResponse();
          const duration = Date.now() - now;
          this.logger.log(
            `[${tenantId}] ${method} ${url} → ${res.statusCode} (${duration}ms)`,
          );
        },
        error: (err) => {
          const duration = Date.now() - now;
          this.logger.error(
            `[${tenantId}] ${method} ${url} → ${err.status || 500} (${duration}ms) ${err.message}`,
          );
        },
      }),
    );
  }
}
