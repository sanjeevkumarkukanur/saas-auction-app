import {
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';
import {
  IsInt,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreatePlayerGameDto {
  //////////////////////////////////////////////////////
  // 🔗 RELATIONS
  //////////////////////////////////////////////////////

  @ApiProperty({
    example: 'player-uuid',
    description: 'Player ID',
  })
  @IsUUID()
  playerId!: string;

  @ApiProperty({
    example: 'game-uuid',
    description: 'Game ID',
  })
  @IsUUID()
  gameId!: string;

  //////////////////////////////////////////////////////
  // 🎮 GAME PROFILE DETAILS
  //////////////////////////////////////////////////////

  @ApiPropertyOptional({
    example: 'BATSMAN',
    description: 'Primary role in selected game',
  })
  @IsOptional()
  @IsString()
  primaryRole?: string;

  @ApiPropertyOptional({
    example: 'OPENER',
    description: 'Secondary / supporting role',
  })
  @IsOptional()
  @IsString()
  secondaryRole?: string;

  @ApiPropertyOptional({
    example: 85.5,
    description: 'Skill rating score',
  })
  @IsOptional()
  @IsNumber()
  skillRating?: number;

  @ApiPropertyOptional({
    example: 12,
    description: 'Years of experience',
  })
  @IsOptional()
  @IsInt()
  experience?: number;

  //////////////////////////////////////////////////////
  // 🧩 FLEXIBLE ATTRIBUTES
  //////////////////////////////////////////////////////

  @ApiPropertyOptional({
    example: {
      battingStyle: 'RIGHT_HAND_BAT',
      bowlingStyle: 'RIGHT_ARM_MEDIUM',
    },
    description: 'Game specific custom attributes',
  })
  @IsOptional()
  @IsObject()
  attributes?: Record<string, any>;
}