import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ example: 'John Doe', required: false }) // This decorator is used to generate API documentation using Swagger. It indicates that this property should be included in the generated docs and is optional.
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ example: 'USER', enum: ['ADMIN', 'USER'], required: false }) // This decorator is used to generate API documentation using Swagger. It indicates that this property should be included in the generated docs and specifies the allowed values for this property.
  @IsOptional()
  @IsIn(['ADMIN', 'USER'])
  role?: 'ADMIN' | 'USER';
}
