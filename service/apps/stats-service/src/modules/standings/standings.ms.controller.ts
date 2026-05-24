import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { StandingsService } from './standings.service';

@Controller()
export class StandingsMsController {
  constructor(private readonly service: StandingsService) {}

  @MessagePattern('match.completed')
  async handleMatchCompleted(@Payload() payload: any) {
    return this.service.updateFromMatch(payload);
  }

  @MessagePattern('standings.get')
  getStandings(@Payload() seasonId: string) {
    return this.service.getStandings(seasonId);
  }
}
