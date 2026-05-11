import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayerServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
