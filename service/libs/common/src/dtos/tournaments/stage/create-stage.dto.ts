
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsEnum } from 'class-validator';
import { StageType } from '../../../enums/stage-type.enum';

export class CreateStageDto {
  @ApiProperty({
    example: 'Group Stage',
    description: 'Stage name',
  })
  @IsString()
  name!: string;

  @ApiProperty({
    enum: StageType,
    example: StageType.GROUP,
    description: 'Stage type',
  })
  @IsEnum(StageType)
  type!: StageType;

  @ApiProperty({
    example: 1,
    description: 'Stage execution order',
  })
  @IsNumber()
  order!: number;

  @ApiProperty({
    example: 'tournament-uuid',
    description: 'Tournament ID',
  })
  @IsString()
  tournamentId!: string;
}
