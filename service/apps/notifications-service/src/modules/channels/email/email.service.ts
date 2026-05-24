import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  async send(to: string, subject: string, body: string) {
    console.log('EMAIL =>', to, subject, body);
  }
}