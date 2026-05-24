import { Injectable, NotFoundException } from '@nestjs/common';
import { GroupRepository } from './group.repository';
import { CreateGroupDto, UpdateGroupDto, AssignTeamDto } from '@libs/common';

@Injectable()
export class GroupService {
  constructor(private readonly repository: GroupRepository) {}

  create(dto: CreateGroupDto) {
    return this.repository.create(dto);
  }

  findByStage(stageId: string) {
    return this.repository.findByStage(stageId);
  }

  async findOne(id: string) {
    const group = await this.repository.findById(id);

    if (!group) {
      throw new NotFoundException('Group not found');
    }

    return group;
  }

  addTeam(dto: AssignTeamDto) {
    return this.repository.addTeam(dto.groupId, dto.teamId);
  }

  async update(id: string, dto: UpdateGroupDto) {
    await this.findOne(id);
    return this.repository.update(id, dto);
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.repository.delete(id);
  }
}
