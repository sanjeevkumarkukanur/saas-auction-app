import { Injectable } from '@nestjs/common';
import { UsersRepository, UserWithRole } from '../users/users.repository';

@Injectable()
export class LoginRepository {
  constructor(private readonly usersRepo: UsersRepository) {}

  findUserByEmail(email: string): Promise<UserWithRole | null> {
    return this.usersRepo.findByEmail(email);
  }

  findPlayerByPhone(
    countryCode: string,
    phone: string,
  ): Promise<UserWithRole | null> {
    return this.usersRepo.findPlayerByPhone(countryCode, phone);
  }

  createPlayer(data: {
    countryCode: string;
    phone: string;
    role: 'PLAYER';
  }): Promise<UserWithRole> {
    return this.usersRepo.createPlayer(data);
  }
}
