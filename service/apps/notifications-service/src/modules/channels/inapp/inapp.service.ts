import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../database/repositories/notifications.repository';

@Injectable()
export class InAppService {
  constructor(private repo: NotificationsRepository) {}

  create(userId: string, title: string, message: string) {
    return this.repo.create({ userId, title, message });
  }
}
