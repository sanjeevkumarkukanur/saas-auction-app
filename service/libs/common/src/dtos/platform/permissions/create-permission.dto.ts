// create-permission.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePermissionDto {
  @ApiProperty({ example: 'users.create' })
  @IsString()
  key: string;

  @ApiProperty({ example: 'Create Users' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'PAGE_UUID_HERE' })
  @IsString()
  pageId: string; // ✅ REQUIRED
}
