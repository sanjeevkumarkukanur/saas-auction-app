import { Injectable } from '@nestjs/common';
import { AuctionAuthRepository } from './auction-auth.repository';
import { AssignAuctionRoleDto } from '@app/common';

@Injectable()
export class AuctionAuthService {
  constructor(private readonly repo: AuctionAuthRepository) {}

  assignRole(dto: AssignAuctionRoleDto) {
    return this.repo.assignRole({
      auctionId: dto.auctionId,
      userId: dto.userId,
      role: dto.role,
    });
  }

  async validateAdmin(auctionId: string, userId: string) {
    const user = await this.repo.findUserRole(auctionId, userId);

    if (!user || user.role !== 'ADMIN') {
      throw new Error('Unauthorized: Admin only');
    }

    return true;
  }

  async validateTeamOwner(auctionId: string, userId: string) {
    const user = await this.repo.findUserRole(auctionId, userId);

    if (!user || user.role !== 'TEAM_OWNER') {
      throw new Error('Unauthorized: Team owner only');
    }

    return true;
  }
}
