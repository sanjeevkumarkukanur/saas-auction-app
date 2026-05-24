import { Injectable } from '@nestjs/common';
import { DevicesRepository } from '../database/repositories/devices.repository';

@Injectable()
export class DevicesService {
  constructor(private readonly repo: DevicesRepository) {}

  register(userId: string, platform: 'android' | 'ios' | 'web', token: string) {
    return this.repo.upsert(userId, platform, token);
  }

  // remove(token: string) {
  //   return this.repo.deleteByToken(token);
  // }

  getByUser(userId: string) {
    return this.repo.findByUser(userId);
  }
}
