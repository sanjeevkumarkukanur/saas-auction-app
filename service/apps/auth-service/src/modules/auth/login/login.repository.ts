import { Injectable } from '@nestjs/common';
import { UsersRepository, UserWithTenant } from '../users/users.repository';

@Injectable()
export class LoginRepository {
  constructor(private readonly usersRepo: UsersRepository) {}

  findUserByEmail(email: string): Promise<UserWithTenant | null> {
    return this.usersRepo.findByEmail(email);
  }

  findPlayerByPhone(
    phone: string,
    tenantId: string,
  ): Promise<UserWithTenant | null> {
    return this.usersRepo.findPlayerByPhone(phone, tenantId);
  }

  createPlayer(data: {
    phone: string;
    tenantId: string;
    role: 'PLAYER';
  }): Promise<UserWithTenant> {
    return this.usersRepo.createPlayer(data);
  }
}
