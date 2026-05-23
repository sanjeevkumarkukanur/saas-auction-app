import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { SeasonRepository } from './season.repository';
import { SeasonStatus } from '../common/enums/season-status.enum';
import { CreateSeasonDto, SeasonFilterDto, UpdateSeasonDto } from '@app/common';

@Injectable()
export class SeasonService {
  constructor(private readonly seasonRepo: SeasonRepository) {}

  async create(dto: CreateSeasonDto) {
    // ✅ Check league exists
    const league = await this.seasonRepo.findLeagueById(dto.leagueId);
    if (!league) {
      throw new NotFoundException('League not found');
    }

    // ✅ Prevent duplicate season per year
    const existing = await this.seasonRepo.findByLeagueAndYear(
      dto.leagueId,
      dto.year,
    );
    if (existing) {
      throw new BadRequestException(
        `Season ${dto.year} already exists for this league`,
      );
    }

    // 🔥 Extract fields
    // const maxTeams = dto.teamMaxTeams;
    const maxPlayers = dto.teamMaxPlayers;
    const minPlayers = dto.teamMinPlayers;
    const squadSize = dto.teamMaxPlayers; // or define explicitly if needed

    // ✅ Business validations
    if (minPlayers > maxPlayers) {
      throw new BadRequestException('Min players cannot exceed max players');
    }

    if (squadSize > maxPlayers) {
      throw new BadRequestException('Squad size cannot exceed max players');
    }

    // if (maxTeams * squadSize > maxPlayers) {
    //   throw new BadRequestException('Total players exceed maxPlayers limit');
    // }

    // ✅ Date validations
    this.validateDates(dto);

    // ✅ Only one active season per league
    if (dto.isActive) {
      await this.seasonRepo.deactivateAll(dto.leagueId);
    }

    // console.log(dto);

    // 🚀 Create season
    return this.seasonRepo.create({
      name: dto.name,
      year: dto.year,
      status: dto.status ?? SeasonStatus.UPCOMING,
      isActive: dto.isActive ?? true,

      // 🔥 RELATION (only league)
      league: {
        connect: { id: dto.leagueId },
      },

      // 🔥 FOREIGN KEY (microservice-safe)
      tenantGameId: dto.tenantGameId,

      // 🔥 TEAM CONFIG
      teamMaxTeams: dto.teamMaxTeams,
      teamMinPlayers: dto.teamMinPlayers,
      teamMaxPlayers: dto.teamMaxPlayers,
      teamForeignPlayerLimit: dto.teamForeignPlayerLimit,

      // 🔥 FINANCIAL
      financialTotalBudget: dto.financialTotalBudget,
      financialPurseCarryOverEnabled:
        dto.financialPurseCarryOverEnabled ?? false,

      // 🔥 AUCTION CONFIG
      auctionDate: dto.auctionDate ? new Date(dto.auctionDate) : null,
      auctionBidIncrement: dto.auctionBidIncrement,
      auctionBidTimeSeconds: dto.auctionBidTimeSeconds,
      auctionAutoBidEnabled: dto.auctionAutoBidEnabled ?? false,
      auctionUndoBidEnabled: dto.auctionUndoBidEnabled ?? false,

      // 🔥 FEATURES
      featurePublicBroadcast: dto.featurePublicBroadcast ?? false,
      featureLiveLeaderboard: dto.featureLiveLeaderboard ?? false,
      featureRealTimeStats: dto.featureRealTimeStats ?? false,

      // 🔥 TIMELINE
      registrationStart: dto.registrationStart
        ? new Date(dto.registrationStart)
        : null,
      registrationEnd: dto.registrationEnd
        ? new Date(dto.registrationEnd)
        : null,
      auctionStart: dto.auctionStart ? new Date(dto.auctionStart) : null,
      auctionEnd: dto.auctionEnd ? new Date(dto.auctionEnd) : null,
      seasonStart: dto.seasonStart ? new Date(dto.seasonStart) : null,
      seasonEnd: dto.seasonEnd ? new Date(dto.seasonEnd) : null,
    });
  }

  findAll(filter: SeasonFilterDto) {
    return this.seasonRepo.findAll(filter);
  }

  async findOne(id: string) {
    const season = await this.seasonRepo.findById(id);

    if (!season) {
      throw new NotFoundException('Season not found');
    }

    return season;
  }

  async update(id: string, dto: UpdateSeasonDto) {
    const season = await this.seasonRepo.findById(id);

    if (!season) {
      throw new NotFoundException('Season not found');
    }

    // ✅ Date validation
    this.validateDates(dto);

    // ✅ Active season logic
    if (dto.isActive) {
      await this.seasonRepo.deactivateAll(season.leagueId);
    }

    return this.seasonRepo.update(id, dto);
  }

  async remove(id: string) {
    const season = await this.seasonRepo.findById(id);

    if (!season) {
      throw new NotFoundException('Season not found');
    }

    return this.seasonRepo.delete(id);
  }

  // 🔥 Helper for date validations
  private validateDates(dto: Partial<CreateSeasonDto>) {
    const {
      registrationStart,
      registrationEnd,
      auctionStart,
      auctionEnd,
      seasonStart,
      seasonEnd,
    } = dto;

    if (
      registrationStart &&
      registrationEnd &&
      registrationEnd < registrationStart
    ) {
      throw new BadRequestException('Registration end must be after start');
    }

    if (auctionStart && auctionEnd && auctionEnd < auctionStart) {
      throw new BadRequestException('Auction end must be after start');
    }

    if (seasonStart && seasonEnd && seasonEnd < seasonStart) {
      throw new BadRequestException('Season end must be after start');
    }
  }
}
