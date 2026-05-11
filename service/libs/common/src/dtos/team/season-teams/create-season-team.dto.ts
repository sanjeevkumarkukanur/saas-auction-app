import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSeasonTeamDto {
  @ApiProperty()
  @IsString()
  tenantId!: string;

  @ApiProperty()
  @IsString()
  teamId!: string;

  @ApiProperty()
  @IsString()
  seasonId!: string;

  @ApiProperty()
  @IsString()
  leagueId!: string;

  @ApiProperty()
  @IsString()
  displayName!: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  ownerId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  logoUrl?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  primaryColor?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  secondaryColor?: string;

  @ApiProperty({
    example: 10000000,
    description: 'Auction purse limit',
  })
  @Type(() => Number)
  @IsNumber()
  purseLimit!: number;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  maxPlayers!: number;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  minPlayers!: number;
}