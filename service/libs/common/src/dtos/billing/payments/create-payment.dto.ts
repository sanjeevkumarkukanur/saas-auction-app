import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PaymentStatus } from '../../../../prisma/generated/billing-client';

export class CreatePaymentDto {
  @ApiProperty({
    example: 'invoice-uuid',
    description: 'Invoice id for this payment',
  })
  invoiceId: string;

  @ApiProperty({
    example: 4999,
    description: 'Payment amount in smallest currency unit',
  })
  amount: number;

  @ApiProperty({
    example: 'INR',
    description: 'Currency code',
  })
  currency: string;

  @ApiProperty({
    enum: PaymentStatus,
    example: PaymentStatus.pending,
    description: 'Payment status',
  })
  status: PaymentStatus;

  @ApiProperty({
    example: 'stripe',
    description: 'Payment provider name',
  })
  provider: string;

  @ApiPropertyOptional({
    example: 'pi_123456789',
    description: 'Provider reference id',
  })
  providerRefId?: string;
}
