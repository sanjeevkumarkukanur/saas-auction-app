import { ApiProperty } from "@nestjs/swagger";

export class SendOtpDto {
  @ApiProperty({ example: "+919876543210" })
  phone: string;

  @ApiProperty({ example: "tenant-id-123" })
  tenantId: string;
}