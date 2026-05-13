import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TeamsRepository } from './teams.repository';
import {
  CreateTeamDto,
  CreateTeamOwnerDbDto,
  SERVICES,
  TeamFilterDto,
  UpdateTeamDto,
} from '@libs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

interface CreatedUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

@Injectable()
export class TeamsService {
  constructor(
    private readonly repository: TeamsRepository,

    // ✅ Inject Tenant Service Client
    @Inject(SERVICES.TENANT_SERVICE)
    private readonly tenantClient: ClientProxy,
  ) {}

  async create(dto: CreateTeamDto) {
    const createdOwners: CreateTeamOwnerDbDto[] = [];

    if (dto.owners?.length) {
      for (const owner of dto.owners) {
        try {
          // 🔥 Call Tenant Service
          const user = await firstValueFrom(
            this.tenantClient.send<CreatedUser>(
              { cmd: 'users.create' },
              {
                dto: {
                  email: owner.email, // 👈 PROBLEM HERE
                  name: owner.ownerName,
                  password: owner.password,
                  role: 'TEAM_OWNER',
                  tenantId: dto.tenantId,
                },
              },
            ),
          );

          // ✅ Safety check
          if (!user?.id) {
            throw new Error('User creation failed');
          }

          // ✅ Clean mapping (NO password, NO spread)
          createdOwners.push({
            ownerId: user.id,
            tenantId: dto.tenantId,
            ownerName: owner.ownerName,
            email: owner.email,
            countryCode: owner.countryCode,
            phone: owner.phone,
            seasonTeamId: owner.seasonTeamId ?? null,
          });
        } catch (error) {
          console.error('Tenant Service Error:', error);
          throw new Error(`Owner creation failed for ${owner.email}`);
        }
      }
    }

    // ✅ Pass clean DB DTO to repository
    return this.repository.create(dto, createdOwners);
  }

  findAll(filter: TeamFilterDto) {
    return this.repository.findAll(filter);
  }

  async findOne(id: string) {
    const team = await this.repository.findById(id);
    if (!team) throw new NotFoundException('Team not found');
    return team;
  }

  async update(id: string, dto: UpdateTeamDto) {
    await this.findOne(id);
    return this.repository.update(id, dto);
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.repository.delete(id);
  }
}
