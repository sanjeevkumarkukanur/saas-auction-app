import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class QualifyStageDto {
  @ApiProperty({
    example: 'group-stage-uuid',
    description: 'Stage ID from which teams qualify',
  })
  @IsString()
  fromStageId!: string;

  @ApiProperty({
    example: 'semi-final-stage-uuid',
    description: 'Stage ID to which teams will move',
  })
  @IsString()
  toStageId!: string;

  @ApiProperty({
    example: 2,
    description: 'Number of top teams per group to qualify',
  })
  @Type(() => Number)
  @IsNumber()
  topN!: number;
}
