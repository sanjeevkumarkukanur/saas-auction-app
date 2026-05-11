import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdatePlayerStatsDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  matches?: number;

  @ApiPropertyOptional()
  @IsOptional()
  average?: number;

  @ApiPropertyOptional()
  @IsOptional()
  rating?: number;

  @ApiPropertyOptional({
    example: { runs: 600, wickets: 12 },
  })
  @IsOptional()
  stats?: any;
}