import { IsOptional, IsString, IsEnum } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { SeasonStatus } from '../../../enums/leagues.enum';

export class SeasonFilterDto {
  @ApiPropertyOptional({
    example: '4951b5e9-9123-4b27-8882-b7245e9100ec',
    description: 'Filter by league ID',
  })
  @IsOptional()
  @IsString()
  leagueId?: string;

  @ApiPropertyOptional({
    enum: SeasonStatus,
    example: SeasonStatus.UPCOMING,
    description: 'Filter by season status',
  })
  @IsOptional()
  @IsEnum(SeasonStatus)
  status?: SeasonStatus;
}
