"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteRepository = void 0;
class FavoriteRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createFavorite(favorite, userId) {
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
    async deleteFavoriteByRecipeId(recipeId, userId) {
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
    async getFavoriteByRecipeId(recipeId) {
        return await this.prisma.favorite.findMany({
            where: {
                recipeId,
            },
        });
    }
    async getFavoriteByUserId(userId) {
        return await this.prisma.favorite.findMany({
            where: {
                userId,
            },
        });
    }
}
exports.FavoriteRepository = FavoriteRepository;
//# sourceMappingURL=index.js.map