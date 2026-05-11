import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateGroupDto {
  @ApiProperty({
    example: 'Group A',
  })
  @IsString()
  name!: string;

  @ApiProperty({
    example: 'stage-uuid',
  })
  @IsString()
  stageId!: string;
}
