import { Injectable } from '@nestjs/common';

@Injectable()
export class TeamServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
