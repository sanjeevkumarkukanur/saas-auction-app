import {
  CreateTeamApprovalDto,
  TeamApprovalFilterDto,
  UpdateTeamApprovalDto,
} from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TeamApprovalProxyService {
  constructor(
    @Inject('TEAM_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  create(dto: CreateTeamApprovalDto) {
    return firstValueFrom(this.client.send('teamApproval.create', dto));
  }

  findAll(filter: TeamApprovalFilterDto) {
    return firstValueFrom(this.client.send('teamApproval.findAll', filter));
  }

  findById(id: string) {
    return firstValueFrom(this.client.send('teamApproval.findById', id));
  }

  update(id: string, dto: UpdateTeamApprovalDto) {
    return firstValueFrom(
      this.client.send('teamApproval.update', {
        id,
        dto,
      }),
    );
  }

  approve(id: string, approvedBy: string) {
    return firstValueFrom(
      this.client.send('teamApproval.approve', {
        id,
        approvedBy,
      }),
    );
  }

  reject(id: string, comment?: string) {
    return firstValueFrom(
      this.client.send('teamApproval.reject', {
        id,
        comment,
      }),
    );
  }
}
