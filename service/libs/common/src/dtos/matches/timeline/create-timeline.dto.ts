import { IsString, IsOptional, IsInt } from 'class-validator';
import { TimelineType } from '../../../enums';

export class CreateTimelineDto {
  @IsString()
  matchId!: string;

  @IsString()
  type!: TimelineType;

  @IsOptional()
  @IsString()
  teamId?: string;

  @IsOptional()
  @IsString()
  playerId?: string;

  @IsOptional()
  @IsInt()
  over?: number;

  @IsOptional()
  @IsInt()
  ball?: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  metadata?: any;
}
