import { IsNumber, IsString } from 'class-validator';

export class PlaceBidDto {
  @IsString()
  seasonTeamId: string;

  @IsNumber()
  amount: number;

  @IsString()
  playerId: string;
}