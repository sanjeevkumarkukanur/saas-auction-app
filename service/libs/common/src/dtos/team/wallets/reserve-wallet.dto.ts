import { IsNumber, IsString } from 'class-validator';

export class ReserveWalletDto {
  @IsString()
  seasonTeamId: string;

  @IsNumber()
  amount: number;
}