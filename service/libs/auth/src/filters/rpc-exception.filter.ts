import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';

interface RpcErrorShape {
  message?: string;
  statusCode?: number;
  error?: string | RpcErrorShape;
}

function isRpcError(value: unknown): value is RpcErrorShape {
  return typeof value === 'object' && value !== null;
}

@Catch()
export class RpcExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger('RpcExceptionFilter');

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    // Handle standard HttpException
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();

      if (typeof res === 'string') {
        message = res;
      } else if (isRpcError(res)) {
        message = res.message ?? exception.message;
      }
    }

    // Handle RPC errors (arrive as plain objects from microservices)
    else if (isRpcError(exception)) {
      const error =
        typeof exception.error === 'object' && isRpcError(exception.error)
          ? exception.error
          : exception;

      message = error.message ?? message;
      status = error.statusCode ?? this.mapMessageToStatus(error.message);
    }

    // Handle plain Error instances
    else if (exception instanceof Error) {
      message = exception.message;
      status = this.mapMessageToStatus(exception.message);
    }

    this.logger.error(
      `[${status}] ${message}`,
      exception instanceof Error ? exception.stack : JSON.stringify(exception),
    );

    response.status(status).json({
      success: false,
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
    });
  }

  private mapMessageToStatus(message?: string): number {
    if (!message) return HttpStatus.INTERNAL_SERVER_ERROR;

    const lower = message.toLowerCase();

    if (
      lower.includes('unauthorized') ||
      lower.includes('invalid credentials') ||
      lower.includes('invalid or expired otp')
    ) {
      return HttpStatus.UNAUTHORIZED;
    }
    if (lower.includes('forbidden') || lower.includes('only owner')) {
      return HttpStatus.FORBIDDEN;
    }
    if (lower.includes('not found')) {
      return HttpStatus.NOT_FOUND;
    }
    if (lower.includes('already exists') || lower.includes('bad request')) {
      return HttpStatus.BAD_REQUEST;
    }

    return HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
