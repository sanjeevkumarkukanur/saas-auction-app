import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetStandingsDto {
  @ApiProperty({
    example: 'season-uuid',
    description: 'Season ID to fetch standings',
  })
  @IsString()
  seasonId: string;
}
