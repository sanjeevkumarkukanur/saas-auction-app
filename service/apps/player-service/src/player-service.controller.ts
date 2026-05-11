import { Controller, Get } from '@nestjs/common';
import { PlayerServiceService } from './player-service.service';

@Controller()
export class PlayerServiceController {
  constructor(private readonly playerServiceService: PlayerServiceService) {}

  @Get()
  getHello(): string {
    return this.playerServiceService.getHello();
  }
}
