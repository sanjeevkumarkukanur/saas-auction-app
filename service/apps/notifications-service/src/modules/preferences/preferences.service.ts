import { Injectable } from '@nestjs/common';
import { PreferencesRepository } from '../database/repositories/preferences.repository';

@Injectable()
export class PreferencesService {
  constructor(private repo: PreferencesRepository) {}

  get(userId: string) {
    return this.repo.getByUser(userId);
  }
}
