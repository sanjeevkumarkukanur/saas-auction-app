import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

export const CurrentUser = createParamDecorator(
  (data: keyof JwtPayload | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user as JwtPayload;

    // If a specific field is requested, return just that field
    // Usage: @CurrentUser('sub') userId: string
    // Usage: @CurrentUser() user: JwtPayload
    return data ? user?.[data] : user;
  },
);
