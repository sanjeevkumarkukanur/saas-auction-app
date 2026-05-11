import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { TournamentFormat } from '../../../enums/tournament-format.enum';

export class UpdateConfigDto {
  @ApiProperty({
    example: 'tournament-uuid',
  })
  @IsString()
  tournamentId!: string;

  @ApiProperty({
    enum: TournamentFormat,
    example: TournamentFormat.GROUP,
  })
  @IsEnum(TournamentFormat)
  format!: TournamentFormat;

  @ApiProperty({
    example: 8,
  })
  @Type(() => Number)
  @IsNumber()
  totalTeams!: number;
}
