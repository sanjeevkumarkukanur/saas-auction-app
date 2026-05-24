import { Injectable } from '@nestjs/common';

@Injectable()
export class WhatsappService {
  async send(phone: string, message: string) {
    console.log('WHATSAPP =>', phone, message);
  }
}
