import { CategoryUseCase } from "../../../category/domain/use-case";
import { IngredientUseCase } from "../../../ingredient/domain/use-case";
import { IStatsUseCase } from "../../../stats/interface";
import { IUserUseCase } from "../../../user/interface";
import { IRecipeRepository, IRecipeUseCase } from "../../interface";
import {
  CreateRecipeDto,
  ResponseRecipeDto,
  UpdateRecipeDto,
} from "../model/dto";
import { Recipe } from "../model/recipe";

export class RecipeUseCase implements IRecipeUseCase {
  constructor(
    private repository: IRecipeRepository,
    private ingredientUseCase: IngredientUseCase,
    private categoryUseCase: CategoryUseCase,
    private statsUseCase: IStatsUseCase,
    private userUseCase: IUserUseCase
  ) {}

  async createRecipe(
    recipe: CreateRecipeDto,
    userId: string
  ): Promise<ResponseRecipeDto> {
    const recipeByName = await this.repository.getRecipeByName(recipe.name);

    const user = await this.userUseCase.getUserById(userId);

    console.log(user);
    if (!user) {
      throw new Error("User not found");
    }

    if (recipeByName) {
      throw new Error("Recipe already exists");
    }
    console.log(recipe.category);

    const categoryByName = await this.categoryUseCase.getCategoryByName(
      recipe.category
    );

    if (!categoryByName) {
      throw new Error("Category not found");
    }

    const listIngredient = await Promise.all(
      recipe.ingredient.map(async (ingredient) => {
        const ingredientByName =
          await this.ingredientUseCase.getIngredientByName(
            ingredient.ingredientName
          );

        if (ingredientByName) {
          return {
            id: ingredientByName.id!,
            ingredientName: ingredientByName.name,
            quantity: ingredient.quantity,
          };
        }

        const result = await this.ingredientUseCase.createIngredient({
          name: ingredient.ingredientName,
          categoryId: ingredient.id,
        });

        return {
          id: result.id!,
          ingredientName: result.name,
          quantity: ingredient.quantity,
        };
      })
    );

    console.log(listIngredient);

    recipe.ingredient = listIngredient;

    console.log(recipe);

    const result = ResponseRecipeDto.parse(
      await this.repository.createRecipe(recipe, userId)
    );

    await this.statsUseCase.createStats({ recipeId: result.id! });

    return result;
  }

  async updateRecipe(
    id: string,
    updateRecipe: UpdateRecipeDto,
    userId: string
  ): Promise<ResponseRecipeDto> {
    const existingRecipe = await this.repository.getRecipeById(id);

    if (!existingRecipe) {
      throw new Error("Recipe not found");
    }

    const listIngredient = await Promise.all(
      updateRecipe.ingredient.map(async (ingredient) => {
        const ingredientByName =
          await this.ingredientUseCase.getIngredientByName(
            ingredient.ingredientName
          );

        if (ingredientByName) {
          return {
            id: ingredientByName.id!,
            ingredientName: ingredientByName.name,
            quantity: ingredient.quantity,
          };
        }

        const result = await this.ingredientUseCase.createIngredient({
          name: ingredient.ingredientName,
          categoryId: ingredient.id,
        });

        return {
          id: result.id!,
          ingredientName: result.name,
          quantity: ingredient.quantity,
        };
      })
    );

    updateRecipe.ingredient = listIngredient;

    return ResponseRecipeDto.parse(
      await this.repository.updateRecipe(id, updateRecipe, userId)
    );
  }

  async deleteRecipe(id: string): Promise<ResponseRecipeDto> {
    return ResponseRecipeDto.parse(await this.repository.deleteRecipe(id));
  }

  async getRecipeById(id: string): Promise<ResponseRecipeDto> {
    return ResponseRecipeDto.parse(await this.repository.getRecipeById(id));
  }

  async getAllRecipe(
    page: number,
    limit: number
  ): Promise<{ recipes: ResponseRecipeDto[]; totalCount: number }> {
    const recipes = await this.repository.getAllRecipe(page, limit);
    if (!recipes) {
      return { recipes: [], totalCount: 0 };
    }
    const result = recipes.recipes.map((recipe) =>
      ResponseRecipeDto.parse(recipe)
    );
    return { recipes: result, totalCount: recipes.totalCount };
  }

  async filterbyCategory(
    category: string,
    page: number,
    limit: number
  ): Promise<{ recipes: ResponseRecipeDto[]; totalCount: number }> {
    const recipes = await this.repository.filterbyCategory(
      category,
      page,
      limit
    );
    return {
      recipes: recipes.recipes.map((recipe) => ResponseRecipeDto.parse(recipe)),
      totalCount: recipes.totalCount,
    };
  }

  async filterbyIngredient(
    ingredient: string,
    page: number,
    limit: number
  ): Promise<{ recipes: ResponseRecipeDto[]; totalCount: number }> {
    const recipes = await this.repository.filterbyIngredient(
      ingredient,
      page,
      limit
    );
    return {
      recipes: recipes.recipes.map((recipe) => ResponseRecipeDto.parse(recipe)),
      totalCount: recipes.totalCount,
    };
  }

  async getRecipeByName(
    name: string
  ): Promise<{ recipes: ResponseRecipeDto[]; totalCount: number }> {
    const result = await this.repository.getRecipeByName(name);
    return { recipes: [ResponseRecipeDto.parse(result)], totalCount: 1 };
  }
}
