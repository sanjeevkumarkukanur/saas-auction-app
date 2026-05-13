import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SendOtpDto {
  @ApiProperty({ example: '+91' })
  @IsString()
  countryCode: string;

  @ApiProperty({ example: '9876543210' })
  @IsString()
  phone: string;
}
