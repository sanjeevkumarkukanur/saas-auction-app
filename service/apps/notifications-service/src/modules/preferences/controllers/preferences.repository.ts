import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PreferencesRepository {
  constructor(private readonly prisma: PrismaService) {}

  // Get notification preferences for a user
  getByUser(userId: string) {
    return this.prisma.notificationPreference.findUnique({
      where: { userId },
    });
  }

  // Create or update preferences
  upsert(
    userId: string,
    data: {
      emailEnabled?: boolean;
      pushEnabled?: boolean;
      inappEnabled?: boolean;
    },
  ) {
    return this.prisma.notificationPreference.upsert({
      where: { userId },
      update: data,
      create: {
        userId,
        emailEnabled: data.emailEnabled ?? true,
        pushEnabled: data.pushEnabled ?? true,
        inappEnabled: data.inappEnabled ?? true,
      },
    });
  }
}
