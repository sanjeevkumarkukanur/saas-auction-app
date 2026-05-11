import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { PlayerSeasonStatus } from '../../../enums/player-role.enum';

export class UpdatePlayerSeasonStatusDto {
  @ApiProperty({ enum: PlayerSeasonStatus })
  @IsEnum(PlayerSeasonStatus)
  status: PlayerSeasonStatus;
}
