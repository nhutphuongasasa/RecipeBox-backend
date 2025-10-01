import { CreateStatsDto, StatsConditionDto } from "../../domain/model/dto";
import { Stats } from "../../domain/model/stats";
import { IStatsRepository } from "../../interface";
import { PrismaClient } from "../../../../generated/prisma";

export class StatsRepository implements IStatsRepository {
  constructor(private prisma: PrismaClient) {}

  async updateRecipeId(id: string, newRecipeId: string): Promise<void> {
    await this.prisma.stats.update({
      where: {
        recipeId: id,
      },
      data: { recipeId: newRecipeId },
    });
  }

  async getStateByRecipeId(recipeId: string): Promise<Stats | null> {
    return await this.prisma.stats.findFirst({
      where: {
        recipeId,
      },
    });
  }

  async createStats(stats: CreateStatsDto): Promise<Stats> {
    return await this.prisma.stats.create({
      data: {
        recipeId: stats.recipeId,
        likes: 0,
        views: 0,
        favorites: 0,
      },
    });
  }

  async deleteStats(id: string): Promise<Stats> {
    return await this.prisma.stats.delete({ where: { id } });
  }

  async getStatsById(id: string): Promise<Stats | null> {
    return await this.prisma.stats.findUnique({ where: { id } });
  }

  async incrementLikes(id: string): Promise<Stats> {
    return await this.prisma.stats.update({
      where: {
        recipeId: id,
      },
      data: { likes: { increment: 1 } },
    });
  }

  async incrementViews(id: string): Promise<Stats> {
    return await this.prisma.stats.update({
      where: {
        recipeId: id,
      },
      data: { views: { increment: 1 } },
    });
  }

  async incrementFavorites(id: string): Promise<Stats> {
    return await this.prisma.stats.update({
      where: {
        recipeId: id,
      },
      data: { favorites: { increment: 1 } },
    });
  }

  async decrementLikes(id: string): Promise<Stats> {
    return await this.prisma.stats.update({
      where: {
        recipeId: id,
      },
      data: { likes: { decrement: 1 } },
    });
  }

  async decrementViews(id: string): Promise<Stats> {
    return await this.prisma.stats.update({
      where: {
        recipeId: id,
      },
      data: { views: { decrement: 1 } },
    });
  }

  async decrementFavorites(id: string): Promise<Stats> {
    return await this.prisma.stats.update({
      where: {
        recipeId: id,
      },
      data: { favorites: { decrement: 1 } },
    });
  }

  async bestRecipe(
    limit: number,
    condition: StatsConditionDto
  ): Promise<Stats[]> {
    return await this.prisma.stats.findMany({
      where: {
        likes: {
          gte: condition.likes,
        },
        views: {
          gte: condition.views,
        },
        favorites: {
          gte: condition.favorites,
        },
      },
      orderBy: { likes: "desc" },
      take: limit,
    });
  }
}
