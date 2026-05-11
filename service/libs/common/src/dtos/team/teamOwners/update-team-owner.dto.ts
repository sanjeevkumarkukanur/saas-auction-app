import { PartialType } from '@nestjs/swagger';
import { CreateTeamOwnerDto } from './create-team-owner.dto';

export class UpdateTeamOwnerDto extends PartialType(
  CreateTeamOwnerDto,
) {}
