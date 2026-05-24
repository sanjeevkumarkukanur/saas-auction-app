import {
  Body,
  Controller,
  Headers,
  Post,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { DevicesService } from '../devices.service';
import { RegisterDeviceDto } from '@app/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('devices')
@UseGuards(AuthGuard('jwt'))
export class DevicesHttpController {
  constructor(private readonly service: DevicesService) {}

  // 🔹 Register device (login)
  @Post('register')
  register(
    @Body() body: RegisterDeviceDto,
    @Headers('x-tenant-id') tenantId: string,
    @Req() req: any,
  ) {
    const userId = req.user.id; // from JWT

    return this.service.register(userId, body.platform, body.token);
  }

  // // 🔹 Remove device (logout)
  // @UseGuards(JwtGuard)
  // @Delete('remove')
  // remove(
  //   @Body('token') token: string,
  //   @Headers('x-tenant-id') tenantId: string,
  // ) {
  //   return this.service.remove(token);
  // }
}
