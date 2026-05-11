import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";
import {
  BattingStyle,
  BowlingStyle,
  PlayerCategory,
  PlayerRole,
} from "../../../enums/player-role.enum";

export class CreatePlayerDto {
  //////////////////////////////////////////////////////
  // 👤 BASIC INFORMATION
  //////////////////////////////////////////////////////

  @ApiProperty({ example: "Virat Kohli" })
  @IsString()
  fullName!: string;

  @ApiPropertyOptional({ example: "V. Kohli" })
  @IsOptional()
  @IsString()
  shortName?: string;

  @ApiPropertyOptional({
    example: "https://cdn.com/virat.jpg",
  })
  @IsOptional()
  @IsString()
  profilePhoto?: string;

  @ApiPropertyOptional({
    example: "1988-11-05",
  })
  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @ApiProperty({
    example: "India",
  })
  @IsString()
  nationality!: string;

  //////////////////////////////////////////////////////
  // 🏏 CRICKET ROLE DETAILS
  //////////////////////////////////////////////////////

  @ApiProperty({
    enum: PlayerRole,
    example: PlayerRole.BATSMAN,
  })
  @IsEnum(PlayerRole)
  primaryRole!: PlayerRole;

  @ApiPropertyOptional({
    enum: BattingStyle,
    example: BattingStyle.RIGHT_HAND_BAT,
  })
  @IsOptional()
  @IsEnum(BattingStyle)
  battingStyle?: BattingStyle;

  @ApiPropertyOptional({
    enum: BowlingStyle,
    example: BowlingStyle.RIGHT_ARM_MEDIUM,
  })
  @IsOptional()
  @IsEnum(BowlingStyle)
  bowlingStyle?: BowlingStyle;

  //////////////////////////////////////////////////////
  // 💰 AUCTION DETAILS
  //////////////////////////////////////////////////////

  @ApiProperty({
    enum: PlayerCategory,
    example: PlayerCategory.MARQUEE,
  })
  @IsEnum(PlayerCategory)
  playerCategory!: PlayerCategory;

  @ApiProperty({
    example: 20000000,
  })
  @IsNumber()
  basePrice!: number;

  @ApiPropertyOptional({
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  captainEligible?: boolean;

  //////////////////////////////////////////////////////
  // 📅 SEASON ASSIGNMENT & STATUS
  //////////////////////////////////////////////////////

  @ApiPropertyOptional({
    example: "IPL 2026 Mega Auction",
  })
  @IsOptional()
  @IsString()
  auctionPoolName?: string;

  @ApiPropertyOptional({
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  isActiveAuction?: boolean;

  @ApiPropertyOptional({
    example: false,
  })
  @IsOptional()
  @IsBoolean()
  isRetained?: boolean;

  //////////////////////////////////////////////////////
  // 🔗 SYSTEM RELATIONS
  //////////////////////////////////////////////////////

  @ApiProperty({
    example: "tenant-uuid",
  })
  @IsUUID()
  tenantId!: string;

  @ApiProperty({
    example: "league-uuid",
  })
  @IsOptional()
  @IsString()
  leagueId?: string;

  @ApiProperty({
    example: "season-uuid",
  })
  @IsOptional()
  @IsString()
  seasonId?: string;

  @ApiProperty({
    example: "game-uuid",
  })
  @IsUUID()
  gameId!: string;
}
