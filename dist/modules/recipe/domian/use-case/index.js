"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeUseCase = void 0;
const dto_1 = require("../model/dto");
class RecipeUseCase {
    repository;
    ingredientUseCase;
    categoryUseCase;
    statsUseCase;
    userUseCase;
    constructor(repository, ingredientUseCase, categoryUseCase, statsUseCase, userUseCase) {
        this.repository = repository;
        this.ingredientUseCase = ingredientUseCase;
        this.categoryUseCase = categoryUseCase;
        this.statsUseCase = statsUseCase;
        this.userUseCase = userUseCase;
    }
    async topRecipeByFavorite(userId) {
        console.log("asdasdsadasd" + userId);
        const recipes = await this.repository.getRecipeByUserId(userId);
        if (!recipes) {
            return null;
        }
        let record = [];
        await Promise.all(recipes.map(async (recipe) => {
            const result = await this.statsUseCase.getStateByRecipeId(recipe.id);
            record.push({
                name: recipe.name,
                favoriteCount: result?.favorites || 0,
            });
        }));
        const totalFavorite = record.reduce((total, recipe) => total + recipe.favoriteCount, 0);
        const totalRecipe = record.length;
        const sortRecipe = record
            .sort((a, b) => b.favoriteCount - a.favoriteCount)
            .slice(0, 5);
        const bestRecipe = sortRecipe[0]?.name;
        return { totalFavorite, totalRecipe, bestRecipe, sortRecipe };
    }
    async countRecipeByCategory(category, userId) {
        return this.repository.countRecipeByCategory(category, userId);
    }
    async getRecipeByUserId(userId) {
        const recipe = await this.repository.getRecipeByUserId(userId);
        if (!recipe) {
            return null;
        }
        return recipe.map((recipe) => dto_1.ResponseRecipeDto.parse(recipe));
    }
    async createRecipe(recipe, userId) {
        const recipeByName = await this.repository.getRecipeByName(recipe.name);
        const user = await this.userUseCase.getUserById(userId);
        if (!user) {
            throw new Error("User not found");
        }
        if (recipeByName) {
            throw new Error("Recipe already exists");
        }
        const categoryByName = await this.categoryUseCase.getCategoryByName(recipe.category);
        if (!categoryByName) {
            throw new Error("Category not found");
        }
        const listIngredient = await Promise.all(recipe.ingredient.map(async (ingredient) => {
            const ingredientByName = await this.ingredientUseCase.getIngredientByName(ingredient.ingredientName);
            if (ingredientByName) {
                return {
                    id: ingredientByName.id,
                    ingredientName: ingredientByName.name,
                    quantity: ingredient.quantity,
                };
            }
            const result = await this.ingredientUseCase.createIngredient({
                name: ingredient.ingredientName,
                categoryId: ingredient.id,
            });
            return {
                id: result.id,
                ingredientName: result.name,
                quantity: ingredient.quantity,
            };
        }));
        recipe.ingredient = listIngredient;
        const result = dto_1.ResponseRecipeDto.parse(await this.repository.createRecipe(recipe, userId));
        await this.statsUseCase.createStats({ recipeId: result.id });
        return result;
    }
    async updateRecipe(id, updateRecipe, userId) {
        const existingRecipe = await this.repository.getRecipeById(id, {
            userId,
        });
        if (!existingRecipe) {
            throw new Error("Recipe not found");
        }
        const listIngredient = await Promise.all(updateRecipe.ingredient.map(async (ingredient) => {
            const ingredientByName = await this.ingredientUseCase.getIngredientByName(ingredient.ingredientName);
            if (ingredientByName) {
                return {
                    id: ingredientByName.id,
                    ingredientName: ingredientByName.name,
                    quantity: ingredient.quantity,
                };
            }
            const result = await this.ingredientUseCase.createIngredient({
                name: ingredient.ingredientName,
                categoryId: ingredient.id,
            });
            return {
                id: result.id,
                ingredientName: result.name,
                quantity: ingredient.quantity,
            };
        }));
        updateRecipe.ingredient = listIngredient;
        const result = dto_1.ResponseRecipeDto.parse(await this.repository.updateRecipe(id, updateRecipe, userId));
        const exsistingStats = await this.statsUseCase.getStateByRecipeId(id);
        if (!exsistingStats) {
            throw new Error("Stats not found");
        }
        await this.statsUseCase.updateRecipeId(id, result.id);
        return result;
    }
    async deleteRecipe(id) {
        return dto_1.ResponseRecipeDto.parse(await this.repository.deleteRecipe(id));
    }
    async getRecipeById(id, cond) {
        return dto_1.ResponseRecipeDto.parse(await this.repository.getRecipeById(id, cond));
    }
    async getAllRecipe(page, limit, cond) {
        const recipes = await this.repository.getAllRecipe(page, limit, cond);
        if (!recipes) {
            return { recipes: [], totalCount: 0 };
        }
        const result = recipes.recipes.map((recipe) => dto_1.ResponseRecipeDto.parse(recipe));
        return { recipes: result, totalCount: recipes.totalCount };
    }
    async filterbyCategory(category, page, limit) {
        const recipes = await this.repository.filterbyCategory(category, page, limit);
        return {
            recipes: recipes.recipes.map((recipe) => dto_1.ResponseRecipeDto.parse(recipe)),
            totalCount: recipes.totalCount,
        };
    }
    async filterbyIngredient(ingredient, page, limit) {
        const recipes = await this.repository.filterbyIngredient(ingredient, page, limit);
        return {
            recipes: recipes.recipes.map((recipe) => dto_1.ResponseRecipeDto.parse(recipe)),
            totalCount: recipes.totalCount,
        };
    }
    async getRecipeByName(name) {
        const result = await this.repository.getRecipeByName(name);
        return { recipes: [dto_1.ResponseRecipeDto.parse(result)], totalCount: 1 };
    }
}
exports.RecipeUseCase = RecipeUseCase;
//# sourceMappingURL=index.js.map