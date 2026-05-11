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

interface RpcError {
  statusCode?: number;
  status?: number;
  message?: string;
}

function isRpcError(value: unknown): value is RpcError {
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

    // Handle RpcException from microservices
    if (exception instanceof RpcException) {
      const error = exception.getError();

      if (isRpcError(error)) {
        status =
          error.statusCode ?? error.status ?? HttpStatus.INTERNAL_SERVER_ERROR;
        message = error.message ?? 'Microservice error';
      } else if (typeof error === 'string') {
        message = error;
      }
    }

    // Handle standard HttpException
    else if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();

      if (typeof res === 'string') {
        message = res;
      } else if (isRpcError(res)) {
        message = res.message ?? exception.message;
      }
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
