import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlanDto, UpdatePlanDto, UpdatePlanLimitDto } from '@libs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PlanRepository {
  constructor(private readonly prisma: PrismaService) {}

  // ---------- Create Plan ----------
  async createPlan(dto: CreatePlanDto) {
    const { pages, limits, ...planData } = dto;

    const plan = await this.prisma.plan.create({
      data: {
        ...planData,
        limits: limits
          ? {
              create: limits,
            }
          : undefined,
      },
    });

    if (pages?.length) {
      await this.prisma.planPage.createMany({
        data: pages.map((pageId) => ({
          planId: plan.id,
          pageId,
        })),
        skipDuplicates: true,
      });
    }

    return this.getPlanWithDetails(plan.id);
  }

  // ---------- Get All Plans ----------
  getAllPlans() {
    return this.prisma.plan.findMany({
      orderBy: { createdAt: 'asc' },
      include: {
        limits: true,
        pages: true,
        planPermissions: true,
      },
    });
  }

  // ---------- Update Plan ----------
  async updatePlan(planId: string, dto: Partial<CreatePlanDto>) {
    const { pages, limits, ...planData } = dto;

    return this.prisma.$transaction(async (tx) => {
      const existing = await tx.plan.findUnique({
        where: { id: planId },
      });

      if (!existing) {
        throw new NotFoundException('Plan not found');
      }

      // 1️⃣ Update plan
      await tx.plan.update({
        where: { id: planId },
        data: planData,
      });

      // 2️⃣ Update limits
      if (limits) {
        await tx.planLimit.upsert({
          where: { planId },
          update: limits,
          create: {
            planId,
            ...limits,
          },
        });
      }

      // 3️⃣ Sync pages
      if (pages) {
        await tx.planPage.deleteMany({
          where: { planId },
        });

        await tx.planPage.createMany({
          data: pages.map((pageId) => ({
            planId,
            pageId,
          })),
          skipDuplicates: true,
        });
      }

      // 4️⃣ Return updated plan
      return tx.plan.findUnique({
        where: { id: planId },
        include: {
          limits: true,
          pages: true,
          planPermissions: true,
        },
      });
    });
  }

  // ---------- Assign Permissions ----------
  async setPlanPermissions(planId: string, permissionIds: string[]) {
    return this.prisma.$transaction(async (tx) => {
      await tx.planPermission.deleteMany({
        where: { planId },
      });

      if (permissionIds.length > 0) {
        await tx.planPermission.createMany({
          data: permissionIds.map((permissionId) => ({
            planId,
            permissionId,
          })),
          skipDuplicates: true,
        });
      }

      return tx.plan.findUnique({
        where: { id: planId },
        include: {
          limits: true,
          pages: true,
          planPermissions: true,
        },
      });
    });
  }

  // ---------- Update Plan Limits ----------
  async updatePlanLimits(
    planId: string,
    dto: {
      maxPages?: number;
      maxSections?: number;
      maxFields?: number;
      maxUsers?: number;
      maxTeams?: number;
      maxPlayers?: number;
    },
  ) {
    return this.prisma.planLimit.upsert({
      where: { planId },
      update: dto,
      create: { planId, ...dto },
    });
  }

  // ---------- Get Plan ----------
  async getPlanWithDetails(planId: string) {
    const plan = await this.prisma.plan.findUnique({
      where: { id: planId },
      include: {
        limits: true,
        pages: true,
        planPermissions: true,
      },
    });

    if (!plan) {
      throw new NotFoundException('Plan not found');
    }

    return plan;
  }
}
