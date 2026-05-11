import { StageType } from '../../enums/stage-type.enum';

export class CreateStageMessageDto {
  name!: string;
  type!: StageType;
  order!: number;
  tournamentId!: string;
}