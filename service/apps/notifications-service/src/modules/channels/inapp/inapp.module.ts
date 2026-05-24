import { Module } from '@nestjs/common';
import { InAppService } from './inapp.service';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [InAppService],
  exports: [InAppService],
})
export class InAppModule {}
