import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AssignTeamDto {
  @ApiProperty({ example: 'group-uuid' })
  @IsString()
  groupId: string;

  @ApiProperty({ example: 'team-uuid' })
  @IsString()
  teamId: string;
}
