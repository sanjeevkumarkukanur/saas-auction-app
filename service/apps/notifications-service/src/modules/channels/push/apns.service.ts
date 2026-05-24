import { Injectable } from '@nestjs/common';

@Injectable()
export class ApnsService {
  async send(token: string, title: string, body: string) {
    console.log('APNS =>', token, title, body);
  }
}