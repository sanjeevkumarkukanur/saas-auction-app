import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupRepository } from './group.repository';
import { GroupMsController } from './group.ms.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [GroupService, GroupRepository],
  controllers: [GroupMsController],
  exports: [GroupService],
})
export class GroupModule {}
