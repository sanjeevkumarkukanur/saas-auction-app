import { PartialType } from '@nestjs/swagger';
import { CreatePlanDto } from './create-plans.dto';

export class UpdatePlanDto {
  name?: string;
  price?: number;
  currency?: string;
  description?: string;
  isActive?: boolean;
}

