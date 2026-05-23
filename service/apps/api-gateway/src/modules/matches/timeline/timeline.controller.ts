import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TimelineProxy } from './timeline.proxy';
import { CreateTimelineDto } from '@libs/common';

@ApiTags('Timeline')
@Controller('timeline')
export class TimelineController {
  constructor(private readonly proxy: TimelineProxy) {}

  // 🔥 Add timeline event
  @Post()
  @ApiOperation({ summary: 'Add timeline event' })
  add(@Body() dto: CreateTimelineDto) {
    return this.proxy.add(dto);
  }

  // 🔥 Get timeline by match
  @Get(':matchId')
  @ApiOperation({ summary: 'Get timeline by match ID' })
  findByMatch(@Param('matchId') matchId: string) {
    return this.proxy.findByMatch(matchId);
  }

  // 🔥 Clear timeline
  @Delete(':matchId')
  @ApiOperation({ summary: 'Clear timeline for match' })
  clear(@Param('matchId') matchId: string) {
    return this.proxy.clear(matchId);
  }
}
