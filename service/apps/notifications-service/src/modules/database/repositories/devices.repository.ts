import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class DevicesRepository {
  constructor(private prisma: PrismaService) {}

  findByUser(userId: string) {
    return this.prisma.userDevice.findMany({ where: { userId } });
  }

  upsert(userId: string, platform: string, token: string) {
    return this.prisma.userDevice.upsert({
      where: { token },
      update: { userId, platform },
      create: { userId, platform, token },
    });
  }
}
