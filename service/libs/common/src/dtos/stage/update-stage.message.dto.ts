import { StageType } from '../../enums/stage-type.enum';

export class UpdateStageMessageDto {
  id!: string;
  name?: string;
  type?: StageType;
  order?: number;
}