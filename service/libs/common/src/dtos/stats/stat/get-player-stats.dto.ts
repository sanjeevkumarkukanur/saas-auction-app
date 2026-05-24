import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class GetPlayerStatsDto {
  @ApiProperty({
    example: 'season-uuid',
    description: 'Season ID',
  })
  @IsString()
  seasonId: string;

  @ApiPropertyOptional({
    example: 'team-uuid',
    description: 'Optional team filter',
  })
  @IsOptional()
  @IsString()
  teamId?: string;
}
