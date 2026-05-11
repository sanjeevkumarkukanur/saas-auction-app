import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsBoolean, IsOptional } from 'class-validator';

export class SubmitScoreDto {
  @ApiProperty()
  @IsString()
  matchId!: string;

  @ApiProperty()
  @IsString()
  teamId!: string;

  @ApiProperty()
  @IsInt()
  runs!: number;

  @ApiProperty()
  @IsInt()
  wickets!: number;

  @ApiProperty()
  @IsInt()
  overs!: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  extras?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  isFinal?: boolean;
}
