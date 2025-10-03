"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteUseCase = void 0;
const dto_1 = require("../model/dto");
class FavoriteUseCase {
    favoriteRepository;
    statsUseCase;
    constructor(favoriteRepository, statsUseCase) {
        this.favoriteRepository = favoriteRepository;
        this.statsUseCase = statsUseCase;
    }
    async createFavorite(favorite, userId) {
        const result = dto_1.ResponseFavoriteDto.parse(await this.favoriteRepository.createFavorite(favorite, userId));
        const existingStats = await this.statsUseCase.getStateByRecipeId(favorite.recipeId);
        if (!existingStats) {
            await this.statsUseCase.createStats({
                recipeId: favorite.recipeId,
            });
        }
        await this.statsUseCase.updateFavoritesByRecipeId(favorite.recipeId, "increment");
        return result;
    }
    async deleteFavoriteByRecipeId(recipeId, userId) {
        return dto_1.ResponseFavoriteDto.parse(await this.favoriteRepository.deleteFavoriteByRecipeId(recipeId, userId));
    }
    async getFavoriteByRecipeId(recipeId) {
        const favoriteList = await this.favoriteRepository.getFavoriteByRecipeId(recipeId);
        return favoriteList.map((favorite) => dto_1.ResponseFavoriteDto.parse(favorite));
    }
    async getFavoriteByUserId(userId) {
        const favoriteList = await this.favoriteRepository.getFavoriteByUserId(userId);
        return favoriteList.map((favorite) => dto_1.ResponseFavoriteDto.parse(favorite));
    }
}
exports.FavoriteUseCase = FavoriteUseCase;
//# sourceMappingURL=index.js.map