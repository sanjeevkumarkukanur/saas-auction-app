import { Module } from '@nestjs/common';
import { PreferencesService } from './preferences.service';
import { PreferencesRepository } from '../database/repositories/preferences.repository';
import { PreferencesHttpController } from './controllers/preferences.http.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [PreferencesService, PreferencesRepository],
  controllers: [PreferencesHttpController],
  exports: [PreferencesService],
})
export class PreferencesModule {}
