import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString, IsEnum } from 'class-validator';
import { TournamentStatus } from '../../../enums/tournament-status.enum';

export class CreateTournamentDto {
  @ApiProperty({
    example: 'IPL 2026 Main Tournament',
    description: 'Tournament name',
  })
  @IsString()
  name!: string;

  @ApiProperty({
    example: 'season-uuid',
    description: 'Season ID reference',
  })
  @IsString()
  seasonId!: string;

  @ApiPropertyOptional({
    example: 'UPCOMING',
    description: 'Tournament status',
  })
  @ApiPropertyOptional({
    enum: TournamentStatus,
  })
  @IsOptional()
  @IsEnum(TournamentStatus)
  status?: TournamentStatus;

  @ApiPropertyOptional({
    example: '2026-03-01',
    description: 'Tournament start date',
  })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional({
    example: '2026-05-30',
    description: 'Tournament end date',
  })
  @IsOptional()
  @IsDateString()
  endDate?: string;
}
