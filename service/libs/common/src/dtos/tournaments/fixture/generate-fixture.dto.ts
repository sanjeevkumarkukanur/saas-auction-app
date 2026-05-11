import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class GenerateFixtureDto {
  @ApiProperty({
    example: 'stage-uuid',
    description: 'Stage ID where fixtures should be generated',
  })
  @IsString()
  stageId!: string;

  @ApiPropertyOptional({
    example: 'group-uuid',
    description: 'Optional group ID (for group stage fixture generation)',
  })
  @IsOptional()
  @IsString()
  groupId?: string;
}
