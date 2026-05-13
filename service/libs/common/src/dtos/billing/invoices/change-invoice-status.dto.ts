import { InvoiceStatus } from '@libs/common/constants/billing.constants';
import { ApiProperty } from '@nestjs/swagger';

export class ChangeInvoiceStatusDto {
  @ApiProperty({
    enum: InvoiceStatus,
    example: InvoiceStatus.PAID,
  })
  status: InvoiceStatus;
}
