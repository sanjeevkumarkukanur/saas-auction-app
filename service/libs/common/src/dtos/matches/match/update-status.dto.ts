import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { MatchStatus } from '../../../enums';

export class UpdateStatusDto {
  @ApiProperty({ enum: MatchStatus })
 @IsEnum(MatchStatus)
  status!: MatchStatus;
}
