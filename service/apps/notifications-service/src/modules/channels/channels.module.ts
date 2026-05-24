import { Module } from '@nestjs/common';
import { EmailModule } from './email/email.module';
import { PushModule } from './push/push.module';
import { InAppModule } from './inapp/inapp.module';
import { SmsService } from './sms/sms.service';
import { WhatsappService } from './whatsapp/whatsapp.service';

@Module({
  imports: [EmailModule, PushModule, InAppModule],
  providers: [SmsService, WhatsappService],
  exports: [EmailModule, PushModule, InAppModule, SmsService, WhatsappService],
})
export class ChannelsModule {}