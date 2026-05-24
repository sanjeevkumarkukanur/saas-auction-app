import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class NotificationsRepository {
  constructor(private prisma: PrismaService) {}

  create(data: { userId: string; title: string; message: string }) {
    return this.prisma.notification.create({ data });
  }

  findByUser(userId: string) {
    return this.prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  markRead(id: string) {
    return this.prisma.notification.update({
      where: { id },
      data: { read: true },
    });
  }
}
