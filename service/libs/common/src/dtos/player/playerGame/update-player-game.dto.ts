import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { PlayerRole } from '../../../enums/player-role.enum';

export class UpdatePlayerGameDto {
  @ApiPropertyOptional({ enum: PlayerRole })
  @IsOptional()
  @IsEnum(PlayerRole)
  role?: PlayerRole;

  @ApiPropertyOptional({ example: 90 })
  @IsOptional()
  @IsNumber()
  skillRating?: number;
}