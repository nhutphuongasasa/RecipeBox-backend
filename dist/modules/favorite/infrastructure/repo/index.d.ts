import { Favorite } from "../../domain/model/favorite";
import { IFavoriteRepository } from "../../interface";
import { PrismaClient } from "../../../../generated/prisma";
import { CreateFavoriteDto } from "../../domain/model/dto";
export declare class FavoriteRepository implements IFavoriteRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    createFavorite(favorite: CreateFavoriteDto, userId: string): Promise<Favorite>;
    deleteFavoriteByRecipeId(recipeId: string, userId: string): Promise<Favorite>;
    getFavoriteByRecipeId(recipeId: string): Promise<Favorite[]>;
    getFavoriteByUserId(userId: string): Promise<Favorite[]>;
}
//# sourceMappingURL=index.d.ts.map