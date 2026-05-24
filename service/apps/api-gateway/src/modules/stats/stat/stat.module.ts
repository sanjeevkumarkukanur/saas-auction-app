import { Module } from '@nestjs/common';
import { StatsController } from './stat.controller';
import { StatsProxy } from './stat.proxy';
import { StatsClientModule } from '../stats-client.module';

@Module({
  imports: [StatsClientModule],
  controllers: [StatsController],
  providers: [StatsProxy],
})
export class StatModule {}
