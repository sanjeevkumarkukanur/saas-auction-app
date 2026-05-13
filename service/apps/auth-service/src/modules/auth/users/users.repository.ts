import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/auth-client';
import { PrismaService } from '../../../prisma/prisma.service';

export type UserWithRole = Prisma.UserGetPayload<{
  include: { roleRel: true };
}>;

export type AppRole = 'OWNER' | 'ADMIN' | 'USER' | 'PLAYER' | 'TEAM_OWNER';

export type UserListItem = {
  id: string;
  email: string | null;
  name: string | null;
  phone: string | null;
  role: string;
  roleId: string;
  tenantId: string | null;
  createdAt: Date;
};

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<UserWithRole | null> {
    if (!email) {
      throw new Error('Email is undefined in repo');
    }

    return this.prisma.user.findUnique({
      where: { email },
      include: {
        roleRel: true,
      },
    });
  }

  async findPlayerByPhone(
    countryCode: string,
    phone: string,
  ): Promise<UserWithRole | null> {
    return this.prisma.user.findFirst({
      where: {
        countryCode,
        phone,
        roleRel: { name: 'PLAYER' },
      },
      include: { roleRel: true },
    });
  }

  async ensureDefaultRoles(tenantId: string) {
    const roles = ['OWNER', 'ADMIN', 'MANAGER', 'USER', 'PLAYER', 'TEAM_OWNER'];

    for (const roleName of roles) {
      await this.prisma.role.upsert({
        where: {
          tenantId_name: {
            tenantId,
            name: roleName,
          },
        },
        update: {},
        create: {
          tenantId,
          name: roleName,
        },
      });
    }
  }

  private async getRoleRow(tenantId: string, role: AppRole) {
    const roleRow = await this.prisma.role.findUnique({
      where: {
        tenantId_name: {
          tenantId,
          name: role,
        },
      },
    });

    if (!roleRow) {
      throw new NotFoundException(
        `Role ${role} not found for tenant ${tenantId}`,
      );
    }

    return roleRow;
  }

  async createPlayer(data: {
    countryCode: string;
    phone: string;
    role: 'PLAYER';
    name?: string;
  }): Promise<UserWithRole> {
    let playerRole = await this.prisma.role.findFirst({
      where: { name: 'PLAYER', tenantId: null },
    });

    if (!playerRole) {
      playerRole = await this.prisma.role.create({
        data: { name: 'PLAYER', tenantId: null },
      });
    }

    return this.prisma.user.create({
      data: {
        countryCode: data.countryCode,
        phone: data.phone,
        name: data.name ?? null,
        email: null,
        password: null,
        tenantId: null,
        roleId: playerRole.id,
      },
      include: { roleRel: true },
    });
  }

  async createUser(data: {
    email: string;
    password: string;
    name?: string;
    role: 'OWNER' | 'ADMIN' | 'USER' | 'TEAM_OWNER';
    tenantId: string;
    phone?: string;
  }): Promise<UserListItem> {
    const roleRow = await this.getRoleRow(data.tenantId, data.role);

    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        name: data.name ?? null,
        phone: data.phone ?? null,
        tenantId: data.tenantId,
        roleId: roleRow.id,
      },
      include: {
        roleRel: true,
      },
    });

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      role: user.roleRel.name,
      roleId: user.roleId,
      tenantId: user.tenantId,
      createdAt: user.createdAt,
    };
  }

  async findByTenant(tenantId: string): Promise<UserListItem[]> {
    const users = await this.prisma.user.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'asc' },
      include: {
        roleRel: true,
      },
    });

    return users.map((user) => ({
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      role: user.roleRel.name,
      roleId: user.roleId,
      tenantId: user.tenantId,
      createdAt: user.createdAt,
    }));
  }

  async findById(userId: string): Promise<UserListItem> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        roleRel: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User ${userId} not found`);
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      role: user.roleRel.name,
      roleId: user.roleId,
      tenantId: user.tenantId,
      createdAt: user.createdAt,
    };
  }

  async updateUser(
    userId: string,
    data: {
      name?: string;
      phone?: string;
      role?: AppRole;
    },
  ): Promise<UserListItem> {
    const existingUser = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, tenantId: true },
    });

    if (!existingUser) {
      throw new NotFoundException(`User ${userId} not found`);
    }

    let roleId: string | undefined;

    if (data.role) {
      if (!existingUser.tenantId) {
        throw new NotFoundException(`Tenant not found for user ${userId}`);
      }
      const roleRow = await this.getRoleRow(existingUser.tenantId, data.role);
      roleId = roleRow.id;
    }

    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        ...(data.name !== undefined ? { name: data.name } : {}),
        ...(data.phone !== undefined ? { phone: data.phone } : {}),
        ...(roleId ? { roleId } : {}),
      },
      include: {
        roleRel: true,
      },
    });

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      role: user.roleRel.name,
      roleId: user.roleId,
      tenantId: user.tenantId,
      createdAt: user.createdAt,
    };
  }

  async findRoleByName(tenantId: string, name: string) {
    return this.prisma.role.findFirst({
      where: { tenantId, name },
    });
  }

  async deleteUser(userId: string): Promise<{ id: string }> {
    return this.prisma.user.delete({
      where: { id: userId },
      select: { id: true },
    });
  }
}
