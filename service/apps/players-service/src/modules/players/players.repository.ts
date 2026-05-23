import { Injectable } from '@nestjs/common';
import { CreatePlayerDto, FilterPlayerDto, UpdatePlayerDto } from '@app/common';
import { PrismaService } from '../../prisma/prisma.service';
import { isUUID } from 'class-validator';

@Injectable()
export class PlayerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePlayerDto) {
    return this.prisma.$transaction(async (tx) => {
      // 1️⃣ Create Player (always)
      const player = await tx.player.create({
        data: {
          fullName: data.fullName,
          shortName: data.shortName,
          profilePhoto: data.profilePhoto,
          dateOfBirth: data.dateOfBirth
            ? new Date(data.dateOfBirth)
            : undefined,
          nationality: data.nationality,
        },
      });

      // 2️⃣ TenantPlayer (only if tenantId exists)
      if (data.tenantId) {
        await tx.tenantPlayer.create({
          data: {
            tenantId: data.tenantId,
            playerId: player.id,
            displayName: data.shortName,
          },
        });
      }

      // 3️⃣ PlayerGameProfile (only if gameId exists)
      if (data.gameId) {
        await tx.playerGameProfile.create({
          data: {
            playerId: player.id,
            gameId: data.gameId,
            primaryRole: data.primaryRole,
            attributes: {
              battingStyle: data.battingStyle,
              bowlingStyle: data.bowlingStyle,
              playerCategory: data.playerCategory,
            },
          },
        });
      }

      // 4️⃣ PlayerLeague (only if valid UUID)
      if (data.leagueId && isUUID(data.leagueId)) {
        await tx.playerLeague.create({
          data: {
            playerId: player.id,
            leagueId: data.leagueId,
          },
        });
      }

      // 5️⃣ PlayerSeason (only if all required fields exist)
      if (
        data.tenantId &&
        data.leagueId &&
        data.seasonId &&
        isUUID(data.leagueId) &&
        isUUID(data.seasonId)
      ) {
        await tx.playerSeason.create({
          data: {
            playerId: player.id,
            tenantId: data.tenantId,
            leagueId: data.leagueId,
            seasonId: data.seasonId,
            basePrice: data.basePrice ?? 0,
          },
        });
      }

      return player;
    });
  }

  findAll(filter: FilterPlayerDto) {
    return this.prisma.player.findMany({
      where: {
        fullName: filter.fullName
          ? {
              contains: filter.fullName,
              mode: 'insensitive',
            }
          : undefined,

        shortName: filter.shortName
          ? {
              contains: filter.shortName,
              mode: 'insensitive',
            }
          : undefined,

        nationality: filter.nationality
          ? {
              equals: filter.nationality,
              mode: 'insensitive',
            }
          : undefined,

        dateOfBirth: filter.dateOfBirth
          ? new Date(filter.dateOfBirth)
          : undefined,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findById(id: string) {
    return this.prisma.player.findUnique({ where: { id } });
  }

  update(id: string, data: UpdatePlayerDto) {
    return this.prisma.player.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.player.delete({ where: { id } });
  }
}
