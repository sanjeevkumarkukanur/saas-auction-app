import { IsNumber, IsString } from 'class-validator';

export class DeductWalletDto {
  @IsString()
  seasonTeamId: string;

  @IsNumber()
  amount: number;
}