import { Injectable } from '@nestjs/common';

@Injectable()
export class SmsService {
  async send(phone: string, message: string) {
    console.log('SMS =>', phone, message);
  }
}