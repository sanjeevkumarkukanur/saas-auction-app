import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdatePresenceDto {
  @IsString()
  seasonTeamId: string;

  @IsBoolean()
  isOnline: boolean;

  @IsOptional()
  @IsString()
  socketId?: string;
}
