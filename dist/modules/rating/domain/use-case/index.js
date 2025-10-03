"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingUseCase = void 0;
const dto_1 = require("../model/dto");
class RatingUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async createRating(rating) {
        const existingRating = await this.repository.getRatingById(rating.recipeId);
        if (existingRating) {
            throw new Error("Rating already exists");
        }
        const newRating = await this.repository.createRating(rating);
        return dto_1.ResponseRatingDto.parse(newRating);
    }
    async updateRating(id, rating) {
        const existingRating = await this.repository.getRatingById(id);
        if (!existingRating) {
            throw new Error("Rating not found");
        }
        const updatedRating = await this.repository.updateRating(id, rating);
        return dto_1.ResponseRatingDto.parse(updatedRating);
    }
    async deleteRating(id) {
        const existingRating = await this.repository.getRatingById(id);
        if (!existingRating) {
            throw new Error("Rating not found");
        }
        const deletedRating = await this.repository.deleteRating(id);
        return dto_1.ResponseRatingDto.parse(deletedRating);
    }
    async getRatingById(id) {
        const rating = await this.repository.getRatingById(id);
        if (!rating) {
            throw new Error("Rating not found");
        }
        return dto_1.ResponseRatingDto.parse(rating);
    }
}
exports.RatingUseCase = RatingUseCase;
//# sourceMappingURL=index.js.map