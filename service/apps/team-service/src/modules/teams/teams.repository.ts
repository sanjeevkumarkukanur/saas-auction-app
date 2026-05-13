import {
  CreateTeamDto,
  CreateTeamOwnerDbDto,
  CreateTeamOwnerDto,
  TeamFilterDto,
  UpdateTeamDto,
} from '@libs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/teams-client';

@Injectable()
export class TeamsRepository {
  constructor(private readonly prisma: PrismaService) {}

  // ✅ CREATE TEAM
  async create(data: CreateTeamDto, owners?: CreateTeamOwnerDbDto[]) {
    return this.prisma.$transaction(async (tx) => {
      const team = await tx.team.create({
        data: {
          tenantId: data.tenantId,
          name: data.name,
          shortName: data.shortName,
          code: data.code,
          logoUrl: data.logoUrl,
          primaryColor: data.primaryColor,
          secondaryColor: data.secondaryColor,
          isActive: data.isActive ?? true,
          status: data.status ?? 'PENDING',
        },
      });

      let ownersData: Prisma.TeamOwnerCreateManyInput[] = []; // ✅ FIXED

      if (owners?.length) {
        const uniqueOwners = new Map<string, CreateTeamOwnerDbDto>();

        owners.forEach((owner) => {
          if (!owner.ownerId) {
            throw new Error('Invalid ownerId from tenant service');
          }

          if (!uniqueOwners.has(owner.ownerId)) {
            uniqueOwners.set(owner.ownerId, owner);
          }
        });

        ownersData = Array.from(uniqueOwners.values()).map((owner) => ({
          tenantId: data.tenantId,
          teamId: team.id, // ✅ always string
          seasonTeamId: owner.seasonTeamId ?? null,
          ownerId: owner.ownerId,
          ownerName: owner.ownerName,
          email: owner.email,
          countryCode: owner.countryCode,
          phone: owner.phone,
        }));

        await tx.teamOwner.createMany({
          data: ownersData,
          skipDuplicates: true,
        });
      }

      return {
        success: true,
        team,
        owners: ownersData, // ✅ safe now
      };
    });
  }

  // ✅ FIND ALL
  findAll(filter: TeamFilterDto) {
    return this.prisma.team.findMany({
      where: {
        tenantId: filter.tenantId,
        ...(filter.search && {
          OR: [
            { name: { contains: filter.search, mode: 'insensitive' } },
            { shortName: { contains: filter.search, mode: 'insensitive' } },
            { code: { contains: filter.search, mode: 'insensitive' } },
          ],
        }),
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  // ✅ FIND ONE
  findById(id: string) {
    return this.prisma.team.findUnique({
      where: { id },
      include: { owners: true },
    });
  }

  // ✅ UPDATE TEAM
  async update(id: string, data: UpdateTeamDto) {
    return this.prisma.$transaction(async (tx) => {
      const existing = await tx.team.findUnique({
        where: { id },
      });

      if (!existing) {
        throw new Error('Team not found');
      }

      // 1️⃣ Update team
      await tx.team.update({
        where: { id },
        data: {
          name: data.name,
          shortName: data.shortName,
          code: data.code,
          logoUrl: data.logoUrl,
          primaryColor: data.primaryColor,
          secondaryColor: data.secondaryColor,
          isActive: data.isActive,
          status: data.status,
        },
      });

      // 2️⃣ Update owners
      if (data.owners?.length) {
        // Remove old owners
        await tx.teamOwner.deleteMany({
          where: { teamId: id },
        });

        const uniqueOwners = new Map<string, CreateTeamOwnerDto>();

        data.owners.forEach((owner) => {
          if (!owner.ownerId) {
            throw new Error('Invalid ownerId');
          }

          if (!uniqueOwners.has(owner.ownerId)) {
            uniqueOwners.set(owner.ownerId, owner);
          }
        });

        const ownersData = Array.from(uniqueOwners.values()).map(
          (owner: CreateTeamOwnerDto) => ({
            tenantId: existing.tenantId,
            teamId: id,
            seasonTeamId: owner.seasonTeamId ?? null,
            ownerId: owner.ownerId,
            ownerName: owner.ownerName,
            email: owner.email,
            countryCode: owner.countryCode,
            phone: owner.phone,
          }),
        );

        await tx.teamOwner.createMany({
          data: ownersData,
          skipDuplicates: true,
        });
      }

      // 3️⃣ Return updated team with owners
      return tx.team.findUnique({
        where: { id },
        include: { owners: true },
      });
    });
  }

  // ✅ DELETE
  delete(id: string) {
    return this.prisma.team.delete({
      where: { id },
    });
  }
}
