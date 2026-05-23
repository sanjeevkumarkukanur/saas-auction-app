import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ScoringService } from './scoring.service';
import { ApproveScoreDto, SubmitScoreDto } from '@app/common';

@Controller()
export class ScoringMsnController {
  constructor(private readonly service: ScoringService) {}

  // 🔥 Submit / Update Score
  @MessagePattern('score.submit')
  submitScore(@Payload() dto: SubmitScoreDto) {
    return this.service.submitScore(dto);
  }

  // 🔥 Approve Final Score
  @MessagePattern('score.approve')
  approveScore(@Payload() dto: ApproveScoreDto) {
    return this.service.approveScore(dto);
  }

  // 🔥 Get Score by Match + Team
  @MessagePattern('score.findOne')
  findOne(@Payload() payload: { matchId: string; teamId: string }) {
    return this.service['repository'].findScore(
      payload.matchId,
      payload.teamId,
    );
  }
}
