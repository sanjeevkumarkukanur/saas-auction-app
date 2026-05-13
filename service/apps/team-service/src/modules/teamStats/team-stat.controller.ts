import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TeamStatService } from './team-stat.service';

@Controller()
export class TeamStatController {
  constructor(private readonly service: TeamStatService) {}

  @MessagePattern('teamStat.create')
  create(@Payload() dto: any) {
    return this.service.create(dto);
  }

  @MessagePattern('teamStat.updateOnBuy')
  updateOnBuy(
    @Payload()
    payload: {
      seasonTeamId: string;
      amount: number;
    },
  ) {
    return this.service.updateOnPlayerBuy(payload.seasonTeamId, payload.amount);
  }

  @MessagePattern('teamStat.unsold')
  unsold(@Payload() seasonTeamId: string) {
    return this.service.incrementUnsold(seasonTeamId);
  }

  @MessagePattern('teamStat.findAll')
  findAll(@Payload() filter: any) {
    return this.service.findAll(filter);
  }

  @MessagePattern('teamStat.findOne')
  findOne(@Payload() id: string) {
    return this.service.findOne(id);
  }
}
