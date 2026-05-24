import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PreferencesRepository {
  constructor(private prisma: PrismaService) {}

  getByUser(userId: string) {
    return this.prisma.notificationPreference.findUnique({
      where: { userId },
    });
  }
}
