import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateMatchDto {
  @ApiProperty()
  @IsString()
  tournamentId!: string;

  @ApiProperty()
  @IsString()
  homeTeamId!: string;

  @ApiProperty()
  @IsString()
  awayTeamId!: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  stageId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  fixtureId?: string;
}
