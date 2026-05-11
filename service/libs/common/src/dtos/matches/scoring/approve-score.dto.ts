import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ApproveScoreDto {
  @ApiProperty()
  @IsString()
  matchId!: string;

  @ApiProperty()
  @IsString()
  teamId!: string;
}
