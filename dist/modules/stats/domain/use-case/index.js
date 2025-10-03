"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsUseCase = void 0;
const dto_1 = require("../model/dto");
class StatsUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async createStats(stats) {
        return dto_1.ResponseStatsDto.parse(await this.repository.createStats(stats));
    }
    async deleteStats(id) {
        return dto_1.ResponseStatsDto.parse(await this.repository.deleteStats(id));
    }
    async getStatsById(id) {
        const result = await this.repository.getStatsById(id);
        if (!result) {
            return null;
        }
        return dto_1.ResponseStatsDto.parse(result);
    }
    async getStateByRecipeId(recipeId) {
        const existingStats = await this.repository.getStateByRecipeId(recipeId);
        if (!existingStats) {
            return null;
        }
        return dto_1.ResponseStatsDto.parse(existingStats);
    }
    async updateLikes(id, action) {
        const existingStats = await this.repository.getStatsById(id);
        if (!existingStats) {
            throw new Error("Stats not found");
        }
        if (action === "increment") {
            await this.repository.incrementLikes(id);
            return true;
        }
        else if (action === "decrement") {
            await this.repository.decrementLikes(id);
            return true;
        }
        return false;
    }
    async updateViews(id, action) {
        const existingStats = await this.repository.getStatsById(id);
        if (!existingStats) {
            throw new Error("Stats not found");
        }
        if (action === "increment") {
            await this.repository.incrementViews(id);
            return true;
        }
        else if (action === "decrement") {
            await this.repository.decrementViews(id);
            return true;
        }
        return false;
    }
    async updateRecipeId(id, newRecipeId) {
        await this.repository.updateRecipeId(id, newRecipeId);
    }
    async updateFavoritesByRecipeId(id, action) {
        const existingStats = await this.repository.getStateByRecipeId(id);
        if (!existingStats) {
            throw new Error("Stats not found");
        }
        if (action === "increment") {
            await this.repository.incrementFavorites(id);
            return true;
        }
        else if (action === "decrement") {
            await this.repository.decrementFavorites(id);
            return true;
        }
        return false;
    }
    async bestRecipe(limit, condition) {
        const result = await this.repository.bestRecipe(limit, condition);
        return result.map((item) => dto_1.ResponseStatsDto.parse(item));
    }
}
exports.StatsUseCase = StatsUseCase;
//# sourceMappingURL=index.js.map