import { Controller, Get, Param, Patch } from '@nestjs/common';
import { NotificationsRepository } from '../../database/repositories/notifications.repository';

@Controller('notifications')
export class NotificationsHttpController {
  constructor(private readonly repo: NotificationsRepository) {}

  @Get(':userId')
  getByUser(@Param('userId') userId: string) {
    return this.repo.findByUser(userId);
  }

  @Patch(':id/read')
  markRead(@Param('id') id: string) {
    return this.repo.markRead(id);
  }
}
