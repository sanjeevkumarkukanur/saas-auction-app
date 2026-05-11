import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsOptional,
  IsString,
} from 'class-validator';

export class FilterPlayerDto {
  @ApiPropertyOptional({
    example: 'Virat Kohli',
    description: 'Filter by full player name',
  })
  @IsOptional()
  @IsString()
  fullName?: string;

  @ApiPropertyOptional({
    example: 'V. Kohli',
    description: 'Filter by short/display name',
  })
  @IsOptional()
  @IsString()
  shortName?: string;

  @ApiPropertyOptional({
    example: 'India',
    description: 'Filter by nationality',
  })
  @IsOptional()
  @IsString()
  nationality?: string;

  @ApiPropertyOptional({
    example: '1988-11-05',
    description: 'Filter by date of birth',
  })
  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;
}