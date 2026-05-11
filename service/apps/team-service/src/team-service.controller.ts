import { Controller, Get } from '@nestjs/common';
import { TeamServiceService } from './team-service.service';

@Controller()
export class TeamServiceController {
  constructor(private readonly teamServiceService: TeamServiceService) {}

  @Get()
  getHello(): string {
    return this.teamServiceService.getHello();
  }
}
