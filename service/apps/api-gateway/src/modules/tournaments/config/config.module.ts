import { Module } from '@nestjs/common';
import { ConfigController } from './config.controller';
import { ConfigProxy } from './config.proxy';
import { TournamentsClientModule } from '@libs/common';

@Module({
  imports: [TournamentsClientModule],
  controllers: [ConfigController],
  providers: [ConfigProxy],
})
export class ConfigModule {}
