import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Response } from 'express';

@Catch()
export class RpcExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger('RpcExceptionFilter');

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    // Handle RpcException from microservices
    if (exception instanceof RpcException) {
      const error = exception.getError();

      if (typeof error === 'object' && error !== null) {
        const err = error as Record<string, any>;
        status =
          err.statusCode || err.status || HttpStatus.INTERNAL_SERVER_ERROR;
        message = err.message || 'Microservice error';
      } else if (typeof error === 'string') {
        message = error;
      }
    }

    // Handle standard HttpException
    else if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();
      message =
        typeof res === 'string'
          ? res
          : (res as any).message || exception.message;
    }

    // Handle unknown errors
    else if (exception instanceof Error) {
      message = exception.message;
    }

    this.logger.error(
      `[${status}] ${message}`,
      exception instanceof Error ? exception.stack : '',
    );

    response.status(status).json({
      success: false,
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
    });
  }
}
