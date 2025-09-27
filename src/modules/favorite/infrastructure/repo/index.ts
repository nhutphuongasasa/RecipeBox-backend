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
    return await this.prisma.favorite.create({
      data: {
        recipeId: favorite.recipeId,
        userId,
      },
    });
  }

  async deleteFavorite(id: string): Promise<Favorite> {
    const favorite = await this.prisma.favorite.delete({
      where: {
        id,
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
