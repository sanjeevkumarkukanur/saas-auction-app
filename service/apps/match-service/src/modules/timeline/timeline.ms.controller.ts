import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TimelineService } from './timeline.service';
import { CreateTimelineDto } from './dto/create-timeline.dto';

@Controller()
export class TimelineMsController {
  constructor(private readonly service: TimelineService) {}

  // 🔥 Add timeline event
  @MessagePattern('timeline.add')
  add(@Payload() dto: CreateTimelineDto) {
    return this.service.addEvent(dto);
  }

  // 🔥 Get timeline by match
  @MessagePattern('timeline.findByMatch')
  findByMatch(@Payload() matchId: string) {
    return this.service.findByMatch(matchId);
  }

  // 🔥 Clear timeline
  @MessagePattern('timeline.clear')
  clear(@Payload() matchId: string) {
    return this.service.clearMatchTimeline(matchId);
  }
}
