import { ApiProperty } from '@nestjs/swagger';
import { PaymentStatus } from 'apps/billing-service/prisma/generated/billing-client';

export class ChangePaymentStatusDto {
  @ApiProperty({
    enum: PaymentStatus,
    example: PaymentStatus.succeeded,
  })
  status: PaymentStatus;
}
