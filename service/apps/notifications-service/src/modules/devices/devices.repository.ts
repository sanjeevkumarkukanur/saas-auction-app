import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class DevicesRepository {
  constructor(private readonly prisma: PrismaService) {}

  // Get all devices of a user
  findByUser(userId: string) {
    return this.prisma.userDevice.findMany({
      where: { userId },
    });
  }

  // Register or update a device token
  upsert(userId: string, platform: 'android' | 'ios' | 'web', token: string) {
    return this.prisma.userDevice.upsert({
      where: { token }, // token must be unique
      update: {
        userId,
        platform,
      },
      create: {
        userId,
        platform,
        token,
      },
    });
  }

  // Optional: remove a device token (logout)
  deleteByToken(token: string) {
    return this.prisma.userDevice.delete({
      where: { token },
    });
  }
}
