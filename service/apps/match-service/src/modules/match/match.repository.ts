import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  Prisma,
  Match,
  MatchStatus,
} from '../../../prisma/generated/match-client';

@Injectable()
export class MatchRepository {
  constructor(private readonly prisma: PrismaService) {}

  // ✅ CREATE
  create(data: Prisma.MatchCreateInput): Promise<Match> {
    return this.prisma.match.create({ data });
  }

  // ✅ FIND ALL
  findAll(): Promise<Match[]> {
    return this.prisma.match.findMany({
      include: {
        scores: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  // ✅ FIND ONE
  findById(id: string): Promise<Match | null> {
    return this.prisma.match.findUnique({
      where: { id },
      include: {
        scores: {
          orderBy: { innings: 'asc' },
        },
        timeline: {
          orderBy: { createdAt: 'asc' },
        },
      },
    });
  }

  // ✅ UPDATE
  update(id: string, data: Prisma.MatchUpdateInput): Promise<Match> {
    return this.prisma.match.update({
      where: { id },
      data,
    });
  }

  // ✅ DELETE (hard)
  delete(id: string): Promise<Match> {
    return this.prisma.match.delete({
      where: { id },
    });
  }

  // 🔥 OPTIONAL: find by status
  findByStatus(status: MatchStatus): Promise<Match[]> {
    return this.prisma.match.findMany({
      where: { status },
      include: { scores: true },
    });
  }
}
