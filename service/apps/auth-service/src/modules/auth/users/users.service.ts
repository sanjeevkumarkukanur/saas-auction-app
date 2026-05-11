import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, UpdateUserDto } from '@app/common';
import { CacheService } from '@server/redis';

export type CurrentUser = {
  id: string;
  tenantId: string;
  role: 'OWNER' | 'ADMIN' | 'USER' | 'PLAYER' | 'SUPER_ADMIN';
  email?: string | null;
};

const CacheKeys = {
  usersByTenant: (tenantId: string) => `tenant:${tenantId}:users`,
};

@Injectable()
export class UsersService {
  constructor(
    private readonly repo: UsersRepository,
    private readonly redis: CacheService,
  ) {}

  async createUser(dto: CreateUserDto) {
    const existing = await this.repo.findByEmail(dto.email);

    if (existing) {
      throw new BadRequestException('User with this email already exists');
    }

    const hashed = await bcrypt.hash(dto.password, 10);
    const user = await this.repo.createUser({
      email: dto.email,
      password: hashed,
      name: dto.name,
      role: dto.role,
      tenantId: dto.tenantId,
    });

    await this.redis.del(CacheKeys.usersByTenant(dto.tenantId));

    return user;
  }

  async listUsers(currentUser: CurrentUser) {
    const key = CacheKeys.usersByTenant(currentUser.tenantId);

    const cached = await this.redis.get<any[]>(key);
    if (cached) {
      return cached;
    }

    const users = await this.repo.findByTenant(currentUser.tenantId);

    await this.redis.set(key, users, 300);

    return users;
  }

  async updateUser(
    currentUser: CurrentUser,
    userId: string,
    dto: UpdateUserDto,
  ) {
    if (currentUser.role !== 'OWNER') {
      throw new ForbiddenException('Only OWNER can update users');
    }

    const users = await this.repo.findByTenant(currentUser.tenantId);
    const exists = users.find((u) => u.id === userId);

    if (!exists) {
      throw new NotFoundException('User not found in your tenant');
    }

    const updated = await this.repo.updateUser(userId, dto);

    await this.redis.del(CacheKeys.usersByTenant(currentUser.tenantId));

    return updated;
  }

  async deleteUser(currentUser: CurrentUser, userId: string) {
    if (currentUser.role !== 'OWNER') {
      throw new ForbiddenException('Only OWNER can delete users');
    }

    const users = await this.repo.findByTenant(currentUser.tenantId);
    const exists = users.find((u) => u.id === userId);

    if (!exists) {
      throw new NotFoundException('User not found in your tenant');
    }

    const deleted = await this.repo.deleteUser(userId);

    await this.redis.del(CacheKeys.usersByTenant(currentUser.tenantId));

    return deleted;
  }
}
