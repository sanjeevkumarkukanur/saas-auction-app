import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePlayerStatsDto {
  @ApiProperty()
  @IsString()
  playerSeasonId: string;

  @ApiProperty()
  @IsString()
  gameId: string;

  @ApiProperty({ default: 0 })
  @IsOptional()
  @IsNumber()
  matches?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  average?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  rating?: number;

  @ApiProperty({
    example: { runs: 500, wickets: 10 },
    required: false,
  })
  @IsOptional()
  stats?: any; // JSON
}