import { PaymentStatus } from '@libs/common/constants/billing.constants';
import { ApiProperty } from '@nestjs/swagger';

export class ChangePaymentStatusDto {
  @ApiProperty({
    enum: PaymentStatus,
    example: PaymentStatus.SUCCESS,
  })
  status: PaymentStatus;
}
