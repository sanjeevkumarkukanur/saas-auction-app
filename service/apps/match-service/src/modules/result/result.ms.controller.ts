import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ResultService } from './result.service';

@Controller()
export class ResultMsController {
  constructor(private readonly service: ResultService) {}

  @MessagePattern('result.calculate')
  calculate(@Payload() matchId: string) {
    return this.service.calculateResult(matchId);
  }
}
