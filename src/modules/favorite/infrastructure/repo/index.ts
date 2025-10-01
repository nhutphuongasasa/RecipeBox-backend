import { Favorite } from "../../domain/model/favorite";
import { IFavoriteRepository } from "../../interface";
import { PrismaClient } from "../../../../generated/prisma";
import { CreateFavoriteDto } from "../../domain/model/dto";

export class FavoriteRepository implements IFavoriteRepository {
  constructor(private prisma: PrismaClient) {}

  async createFavorite(
    favorite: CreateFavoriteDto,
    userId: string
  ): Promise<Favorite> {
    const result = await this.prisma.favorite.create({
      data: {
        recipeId: favorite.recipeId,
        userId,
      },
    });

    return {
      recipeId: result.recipeId,
      userId: result.userId,
      id: result.id,
    };
  }

  async deleteFavoriteByRecipeId(
    recipeId: string,
    userId: string
  ): Promise<Favorite> {
    const existingFavorite = await this.prisma.favorite.findFirst({
      where: {
        recipeId,
        userId,
      },
    });

    if (!existingFavorite) {
      throw new Error("Favorite not found");
    }

    const favorite = await this.prisma.favorite.delete({
      where: {
        id: existingFavorite.id,
      },
      include: {
        user: true,
      },
    });

    return {
      recipeId: favorite.recipeId,
      userId: favorite.userId,
      id: favorite.id,
    };
  }

  async getFavoriteByRecipeId(recipeId: string): Promise<Favorite[]> {
    return await this.prisma.favorite.findMany({
      where: {
        recipeId,
      },
    });
  }

  async getFavoriteByUserId(userId: string): Promise<Favorite[]> {
    return await this.prisma.favorite.findMany({
      where: {
        userId,
      },
    });
  }
}
