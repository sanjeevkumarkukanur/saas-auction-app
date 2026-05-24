import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../database/repositories/notifications.repository';
import { DevicesRepository } from '../database/repositories/devices.repository';
import { PreferencesRepository } from '../database/repositories/preferences.repository';
import { EmailService } from '../channels/email/email.service';
import { FcmService } from '../channels/push/fcm.service';
import { ApnsService } from '../channels/push/apns.service';
import { InAppService } from '../channels/inapp/inapp.service';
import { SmsService } from '../channels/sms/sms.service';
import { WhatsappService } from '../channels/whatsapp/whatsapp.service';
import { SendNotificationDto } from '@app/common';

@Injectable()
export class NotificationsService {
  constructor(
    private notificationsRepo: NotificationsRepository,
    private devicesRepo: DevicesRepository,
    private preferencesRepo: PreferencesRepository,
    private emailService: EmailService,
    private fcmService: FcmService,
    private apnsService: ApnsService,
    private inAppService: InAppService,
    private smsService: SmsService,
    private whatsappService: WhatsappService,
  ) {}

  async send(dto: SendNotificationDto): Promise<void> {
    const [prefs, devices] = await Promise.all([
      this.preferencesRepo.getByUser(dto.userId),
      this.devicesRepo.findByUser(dto.userId),
    ]);

    const tasks: Promise<any>[] = [];

    if (dto.channels.includes('inapp') && prefs?.inappEnabled !== false) {
      tasks.push(this.inAppService.create(dto.userId, dto.title, dto.message));
    }

    if (dto.channels.includes('email') && prefs?.emailEnabled !== false) {
      tasks.push(this.emailService.send(dto.userId, dto.title, dto.message));
    }

    if (dto.channels.includes('sms') && prefs?.pushEnabled !== false) {
      tasks.push(this.smsService.send(dto.userId, dto.message));
    }

    if (dto.channels.includes('whatsapp') && prefs?.pushEnabled !== false) {
      tasks.push(this.whatsappService.send(dto.userId, dto.message));
    }

    if (dto.channels.includes('push') && prefs?.pushEnabled !== false) {
      for (const d of devices) {
        if (d.platform === 'android' || d.platform === 'web') {
          tasks.push(this.fcmService.send(d.token, dto.title, dto.message));
        }
        if (d.platform === 'ios') {
          tasks.push(this.apnsService.send(d.token, dto.title, dto.message));
        }
      }
    }

    await Promise.allSettled(tasks);
  }
}
