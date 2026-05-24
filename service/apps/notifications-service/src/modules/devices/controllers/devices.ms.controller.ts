import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { DevicesService } from '../devices.service';

@Controller()
export class DevicesMsController {
  constructor(private readonly devicesService: DevicesService) {}

  // 🔹 Fire-and-forget (emit)
  @EventPattern('device.register')
  async handleRegister(
    @Payload()
    data: {
      tenantId: string;
      userId: string;
      platform: 'android' | 'ios' | 'web';
      token: string;
    },
  ) {
    return this.devicesService.register(data.userId, data.platform, data.token);
  }

  // 🔹 Fire-and-forget
  //   @EventPattern('device.remove')
  //   async handleRemove(
  //     @Payload()
  //     data: {
  //       token: string;
  //     },
  //   ) {
  //     return this.devicesService.remove(data.token);
  //   }

  // 🔹 Request/Response (send)
  @MessagePattern('device.getByUser')
  async handleGetByUser(
    @Payload()
    data: {
      userId: string;
    },
  ) {
    return this.devicesService.getByUser(data.userId);
  }
}
