import { Module } from '@nestjs/common';
import { FcmService } from './fcm.service';
import { ApnsService } from './apns.service';

@Module({
  providers: [FcmService, ApnsService],
  exports: [FcmService, ApnsService],
})
export class PushModule {}
