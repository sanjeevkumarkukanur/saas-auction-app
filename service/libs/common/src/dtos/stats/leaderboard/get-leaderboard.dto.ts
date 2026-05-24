import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetLeaderboardDto {
  @ApiProperty({
    example: 'tournament-uuid',
    description: 'Tournament ID to fetch leaderboard',
  })
  @IsString()
  tournamentId: string;
}
