import { Controller, Get, Param } from '@nestjs/common';
import { PreferencesService } from '../preferences.service';

@Controller('preferences')
export class PreferencesHttpController {
  constructor(private service: PreferencesService) {}

  @Get(':userId')
  get(@Param('userId') userId: string) {
    return this.service.get(userId);
  }
}