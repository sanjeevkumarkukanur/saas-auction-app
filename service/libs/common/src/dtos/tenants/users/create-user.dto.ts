import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsIn, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {

  @ApiHideProperty()
   id?: string;

   @ApiProperty()
  @IsString()
  tenantId!: string;
  @ApiProperty({ example: 'abc@gmail.com' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  password!: string;

  @ApiProperty({ example: 'John Doe', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ example: 'USER', enum: ['ADMIN', 'USER', 'TEAM_OWNER'] })
  @IsIn(['ADMIN', 'USER'])
  role!: 'ADMIN' | 'USER';
}
