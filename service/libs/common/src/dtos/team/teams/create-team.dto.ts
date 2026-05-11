import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  ValidateNested,
  IsArray,
  IsString,
  IsOptional,
  IsBoolean,
  IsEnum,
} from "class-validator";
import { CreateTeamOwnerDto } from "../teamOwners/create-team-owner.dto";
import { TeamStatus } from "../../../enums/teams.enum";

export class CreateTeamDto {
  @ApiHideProperty()
  @IsString()
  tenantId!: string;

  @ApiProperty()
  @IsString()
  name!: string;

  @ApiProperty()
  @IsString()
  shortName!: string;

  @ApiProperty()
  @IsString()
  code!: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  logoUrl?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  primaryColor?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  secondaryColor?: string;

  @ApiProperty({ required: false, default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ enum: TeamStatus, required: false })
  @IsOptional()
  @IsEnum(TeamStatus)
  status?: TeamStatus;

  // 🔥 NEW: Owners array
  @ApiProperty({ type: [CreateTeamOwnerDto], required: false })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateTeamOwnerDto)
  owners?: CreateTeamOwnerDto[];
}

