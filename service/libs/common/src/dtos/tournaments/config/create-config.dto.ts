import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateConfigDto {
  @ApiProperty({
    example: 'tournament-uuid',
    description: 'Tournament ID reference',
  })
  @IsString()
  tournamentId: string;

  @ApiProperty({
    example: 'GROUP',
    description: 'Tournament format (GROUP | LEAGUE | HYBRID)',
  })
  @IsString()
  format: string;

  @ApiProperty({
    example: 8,
    description: 'Total number of teams in tournament',
  })
  @Type(() => Number)
  @IsNumber()
  totalTeams: number;
}
