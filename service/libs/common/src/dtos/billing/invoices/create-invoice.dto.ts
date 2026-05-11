import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { InvoiceStatus } from '../../../../prisma/generated/billing-client';

export class CreateInvoiceDto {
  @ApiProperty({
    example: 'subscription-uuid',
    description: 'Subscription id for this invoice',
  })
  subscriptionId: string;

  @ApiProperty({
    example: 999,
    description: 'Invoice amount in smallest currency unit',
  })
  amount: number;

  @ApiProperty({
    example: 'INR',
    description: 'Currency code',
  })
  currency: string;

  @ApiProperty({
    enum: InvoiceStatus,
    example: InvoiceStatus.open,
    description: 'Invoice status',
  })
  status: InvoiceStatus;

  @ApiPropertyOptional({
    example: 'INV-2026-0001',
    description: 'Invoice number',
  })
  invoiceNumber?: string;

  @ApiPropertyOptional({
    example: 'https://billing.example.com/invoices/INV-2026-0001',
    description: 'Hosted invoice URL',
  })
  hostedUrl?: string;
}
