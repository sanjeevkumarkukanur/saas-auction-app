import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersProxy } from './users.proxy';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto, UpdateUserDto } from '@app/common';

@Controller('users')
export class UsersController {
  constructor(private readonly proxy: UsersProxy) {}

  // Create user (OWNER only)
  @Post()
  create(@Req() req: any, @Body() dto: CreateUserDto) {
    return this.proxy.create(req.user, dto);
  }

  // List users in tenant
  @UseGuards(AuthGuard('jwt'))
  @Get()
  list(@Req() req: any) {
    // 🔍 DEBUG
    console.log('Gateway req.user =', req.user);

    return this.proxy.list(req.user);
  }

  // Update user
  @Patch(':userId')
  update(
    @Req() req: any,
    @Param('userId') userId: string,
    @Body() dto: UpdateUserDto,
  ) {
    return this.proxy.update(req.user, userId, dto);
  }

  // Delete user
  @Delete(':userId')
  delete(@Req() req: any, @Param('userId') userId: string) {
    return this.proxy.delete(req.user, userId);
  }
}
