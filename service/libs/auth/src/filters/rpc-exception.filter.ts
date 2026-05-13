import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class RpcExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger('RpcExceptionFilter');

  catch(exception: any, host: ArgumentsHost) {
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
      } else if (typeof res === 'object' && res !== null) {
        message = (res as any).message ?? exception.message;
      }
    }

    // Handle RPC errors (arrive as plain objects from microservices)
    else if (typeof exception === 'object' && exception !== null) {
      // RPC errors come in different shapes:
      // { status: 'error', message: '...' }
      // { statusCode: 401, message: '...' }
      // { error: { statusCode: 401, message: '...' } }

      const error = exception.error || exception;

      if (typeof error === 'object') {
        message = error.message || message;
        status = error.statusCode || this.mapMessageToStatus(error.message);
      } else if (typeof error === 'string') {
        message = error;
        status = this.mapMessageToStatus(error);
      }
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
