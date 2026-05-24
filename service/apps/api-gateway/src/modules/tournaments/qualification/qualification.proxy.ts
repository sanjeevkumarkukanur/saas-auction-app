import { QualifyStageDto } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class QualificationProxy {
  constructor(
    @Inject('TOURNAMENT_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  runQualification(dto: QualifyStageDto) {
    return firstValueFrom(this.client.send('qualification.run', dto));
  }
}
