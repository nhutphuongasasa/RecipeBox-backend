"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientUseCase = void 0;
const dto_1 = require("../../domain/model/dto");
class IngredientUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async getIngredientByName(name) {
        const ingredient = await this.repository.getIngredientByName(name);
        if (!ingredient) {
            return null;
        }
        return dto_1.ResponseIngredientDto.parse(ingredient);
    }
    async createIngredient(ingredient) {
        const existingIngredient = await this.repository.getIngredientByName(ingredient.name);
        if (existingIngredient) {
            throw new Error("Ingredient already exists");
        }
        const newIngredient = await this.repository.createIngredient(ingredient);
        return newIngredient;
    }
    async updateIngredient(id, ingredient) {
        const existingIngredient = await this.repository.getIngredientById(id);
        if (!existingIngredient) {
            throw new Error("Ingredient not found");
        }
        if (ingredient.name) {
            const existingIngredientName = await this.repository.getIngredientByName(ingredient.name);
            if (existingIngredientName) {
                throw new Error("Ingredient name already exists");
            }
        }
        // const updatedIngredient = {
        //   ...ingredient,
        //   id,
        // };
        const updatedIngredient = await this.repository.updateIngredient(id, ingredient);
        console.log(updatedIngredient);
        return dto_1.ResponseIngredientDto.parse(updatedIngredient);
    }
    async deleteIngredient(id) {
        const deletedIngredient = await this.repository.deleteIngredient(id);
        if (!deletedIngredient) {
            throw new Error("Ingredient not found");
        }
        return dto_1.ResponseIngredientDto.parse(deletedIngredient);
    }
    async getIngredientById(id) {
        const ingredient = await this.repository.getIngredientById(id);
        if (!ingredient) {
            throw new Error("Ingredient not found");
        }
        return dto_1.ResponseIngredientDto.parse(ingredient);
    }
}
exports.IngredientUseCase = IngredientUseCase;
//# sourceMappingURL=index.js.map