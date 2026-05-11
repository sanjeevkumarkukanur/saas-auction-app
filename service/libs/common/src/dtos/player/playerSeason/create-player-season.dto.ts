import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePlayerSeasonDto {
  @ApiProperty()
  @IsString()
  playerId: string;

  @ApiProperty()
  @IsString()
  tenantId: string;

  @ApiProperty()
  @IsString()
  leagueId: string;

  @ApiProperty()
  @IsString()
  seasonId: string;

  @ApiProperty({ example: 1000000 })
  @IsNumber()
  basePrice: number;
}
