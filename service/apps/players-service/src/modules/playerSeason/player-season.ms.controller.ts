import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PlayerSeasonService } from './player-season.service';

@Controller()
export class PlayerSeasonMsController {
  constructor(private readonly service: PlayerSeasonService) {}

  @MessagePattern('playerSeason.create')
  create(@Payload() dto: any) {
    return this.service.create(dto);
  }

  @MessagePattern('playerSeason.findBySeason')
  findBySeason(@Payload() seasonId: string) {
    return this.service.findBySeason(seasonId);
  }

  @MessagePattern('playerSeason.update')
  update(@Payload() data: { id: string; dto: any }) {
    return this.service.update(data.id, data.dto);
  }

  @MessagePattern('playerSeason.updateStatus')
  updateStatus(@Payload() data: { id: string; status: any }) {
    return this.service.updateStatus(data.id, data.status);
  }

  @MessagePattern('playerSeason.sell')
  sell(@Payload() data: { id: string; soldPrice: number }) {
    return this.service.markSold(data.id, data.soldPrice);
  }

  @MessagePattern('playerSeason.delete')
  remove(@Payload() id: string) {
    return this.service.remove(id);
  }
}
