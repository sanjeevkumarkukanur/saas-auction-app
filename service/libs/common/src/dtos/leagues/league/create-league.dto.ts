import {
  IsString,
  IsOptional,
  IsEnum,
  IsUrl,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { LeagueStatus } from '../../../enums/leagues.enum';

export class CreateLeagueDto {
  @ApiProperty({
    example: 'IPL Premier League',
    description: 'League name',
  })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({
    example: 'https://logo.png',
    description: 'League logo URL',
  })
  @IsUrl()
  logo!: string;

  @ApiProperty({
    example: 'tenant-uuid',
    description: 'Tenant ID',
  })
  @IsString()
  @IsNotEmpty()
  tenantId!: string;

  @ApiProperty({
    example: 'cricket-tenant-game-id',
    description: 'Tenant Game ID',
  })
  @IsString()
  @IsNotEmpty()
  tenantGameId!: string;

  @ApiPropertyOptional({
    example: 'Top tier cricket league',
    description: 'League description',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;

  @ApiPropertyOptional({
    enum: LeagueStatus,
    example: LeagueStatus.DRAFT,
    description: 'League lifecycle status',
  })
  @IsOptional()
  @IsEnum(LeagueStatus)
  status?: LeagueStatus;
}
