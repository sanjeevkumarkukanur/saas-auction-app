import { ApiProperty } from '@nestjs/swagger';
import { InvoiceStatus } from '../../../../prisma/generated/billing-client';

export class ChangeInvoiceStatusDto {
  @ApiProperty({
    enum: InvoiceStatus,
    example: InvoiceStatus.paid,
  })
  status: InvoiceStatus;
}
