// api-gateway/src/common/helpers/rpc-call.helper.ts
import { HttpException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, catchError } from 'rxjs';

export function rpcCall<T>(
  client: ClientProxy,
  pattern: object,
  data: any,
): Promise<T> {
  return firstValueFrom(
    client.send<T>(pattern, data).pipe(
      catchError((error) => {
        throw new HttpException(
          error.message || 'Service error',
          error.statusCode || 500,
        );
      }),
    ),
  );
}
