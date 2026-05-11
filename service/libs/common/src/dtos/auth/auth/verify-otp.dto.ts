import { ApiProperty } from "@nestjs/swagger";

export class VerifyOtpDto {
  @ApiProperty({ example: "+919876543210" })
  phone: string;

  @ApiProperty({ example: "tenant-id-123" })
  tenantId: string;

  @ApiProperty({ example: "123456" })
  otp: string;
}
