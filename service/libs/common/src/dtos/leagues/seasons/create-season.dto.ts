import {
  IsString,
  IsInt,
  IsOptional,
  IsEnum,
  IsDateString,
  IsNumber,
  Min,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SeasonStatus } from '../../../enums/leagues.enum';

export class CreateSeasonDto {
  // 🔥 Basic Info
  @ApiProperty({ example: 'World Elite Cricket Series 2024' })
  @IsString()
  name!: string;

  @ApiProperty({ example: 2024 })
  @Type(() => Number)
  @IsInt()
  year!: number;

  @ApiProperty({ example: 'league-id-uuid' })
  @IsString()
  leagueId!: string;

  @ApiProperty({
    example: 'cricket-tenant-game-id',
    description: 'Tenant Game ID',
  })
  @IsString()
  @IsNotEmpty()
  tenantGameId!: string;

  // 🔥 Team Config
  @ApiProperty({ example: 10 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  teamMaxTeams!: number;

  @ApiProperty({ example: 15 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  teamMinPlayers!: number;

  @ApiProperty({ example: 25 })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  teamMaxPlayers!: number;

  @ApiPropertyOptional({ example: 4 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  teamForeignPlayerLimit?: number;

  // 🔥 Financial
  @ApiProperty({ example: 1000000000 })
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  financialTotalBudget!: number;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  financialPurseCarryOverEnabled?: boolean;

  // 🔥 Auction Config
  @ApiPropertyOptional({ example: '2024-05-15T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  auctionDate?: string;

  @ApiPropertyOptional({ example: 1000000 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  auctionBidIncrement?: number;

  @ApiPropertyOptional({ example: 30 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  auctionBidTimeSeconds?: number;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  auctionAutoBidEnabled?: boolean;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  auctionUndoBidEnabled?: boolean;

  // 🔥 Features
  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  featurePublicBroadcast?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  featureLiveLeaderboard?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  featureRealTimeStats?: boolean;

  // 🔥 Status
  @ApiPropertyOptional({ enum: SeasonStatus, example: 'REGISTRATION_OPEN' })
  @IsOptional()
  @IsEnum(SeasonStatus)
  status?: SeasonStatus;

  // 🔥 Timeline (optional but useful)
  @ApiPropertyOptional({ example: '2026-05-01T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  registrationStart?: string;

  @ApiPropertyOptional({ example: '2026-05-10T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  registrationEnd?: string;

  @ApiPropertyOptional({ example: '2026-05-15T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  auctionStart?: string;

  @ApiPropertyOptional({ example: '2026-05-20T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  auctionEnd?: string;

  @ApiPropertyOptional({ example: '2026-06-01T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  seasonStart?: string;

  @ApiPropertyOptional({ example: '2026-07-01T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  seasonEnd?: string;

  // 🔥 Flags
  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
