"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsRepository = void 0;
class StatsRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async updateRecipeId(id, newRecipeId) {
        await this.prisma.stats.update({
            where: {
                recipeId: id,
            },
            data: { recipeId: newRecipeId },
        });
    }
    async getStateByRecipeId(recipeId) {
        return await this.prisma.stats.findFirst({
            where: {
                recipeId,
            },
        });
    }
    async createStats(stats) {
        return await this.prisma.stats.create({
            data: {
                recipeId: stats.recipeId,
                likes: 0,
                views: 0,
                favorites: 0,
            },
        });
    }
    async deleteStats(id) {
        return await this.prisma.stats.delete({ where: { id } });
    }
    async getStatsById(id) {
        return await this.prisma.stats.findUnique({ where: { id } });
    }
    async incrementLikes(id) {
        return await this.prisma.stats.update({
            where: {
                recipeId: id,
            },
            data: { likes: { increment: 1 } },
        });
    }
    async incrementViews(id) {
        return await this.prisma.stats.update({
            where: {
                recipeId: id,
            },
            data: { views: { increment: 1 } },
        });
    }
    async incrementFavorites(id) {
        return await this.prisma.stats.update({
            where: {
                recipeId: id,
            },
            data: { favorites: { increment: 1 } },
        });
    }
    async decrementLikes(id) {
        return await this.prisma.stats.update({
            where: {
                recipeId: id,
            },
            data: { likes: { decrement: 1 } },
        });
    }
    async decrementViews(id) {
        return await this.prisma.stats.update({
            where: {
                recipeId: id,
            },
            data: { views: { decrement: 1 } },
        });
    }
    async decrementFavorites(id) {
        return await this.prisma.stats.update({
            where: {
                recipeId: id,
            },
            data: { favorites: { decrement: 1 } },
        });
    }
    async bestRecipe(limit, condition) {
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
exports.StatsRepository = StatsRepository;
//# sourceMappingURL=index.js.map