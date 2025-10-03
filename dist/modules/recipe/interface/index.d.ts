import { ConditionDto, CreateRecipeDto, ResponseRecipeDto, UpdateRecipeDto } from "../domian/model/dto";
import { Recipe } from "../domian/model/recipe";
export interface IRecipeUseCase {
    topRecipeByFavorite(userId: string): Promise<any>;
    countRecipeByCategory(category: string, userId: string): Promise<number>;
    getRecipeByName(name: string): Promise<{
        recipes: ResponseRecipeDto[];
        totalCount: number;
    }>;
    createRecipe(recipe: CreateRecipeDto, userId: string): Promise<ResponseRecipeDto>;
    getRecipeByUserId(userId: string): Promise<ResponseRecipeDto[] | null>;
    updateRecipe(id: string, recipe: UpdateRecipeDto, userId: string): Promise<ResponseRecipeDto>;
    deleteRecipe(id: string): Promise<ResponseRecipeDto>;
    getRecipeById(id: string, cond: ConditionDto): Promise<ResponseRecipeDto>;
    filterbyCategory(category: string, page: number, limit: number): Promise<{
        recipes: ResponseRecipeDto[];
        totalCount: number;
    }>;
    filterbyIngredient(ingredient: string, page: number, limit: number): Promise<{
        recipes: ResponseRecipeDto[];
        totalCount: number;
    }>;
    getAllRecipe(page: number, limit: number, cond: ConditionDto): Promise<{
        recipes: ResponseRecipeDto[];
        totalCount: number;
    } | null>;
}
export interface IRecipeRepository {
    countRecipeByCategory(category: string, userId: string): Promise<number>;
    getRecipeByUserId(userId: string): Promise<Recipe[] | null>;
    getAllRecipe(page: number, limit: number, cond: ConditionDto): Promise<{
        recipes: Recipe[];
        totalCount: number;
    } | null>;
    getRecipeByName(name: string): Promise<Recipe | null>;
    getRecipeById(id: string, cond: ConditionDto): Promise<Recipe | null>;
    createRecipe(recipe: CreateRecipeDto, userId: string): Promise<Recipe>;
    updateRecipe(id: string, recipe: UpdateRecipeDto, userId: string): Promise<Recipe>;
    deleteRecipe(id: string): Promise<Recipe>;
    filterbyCategory(category: string, page: number, limit: number): Promise<{
        recipes: Recipe[];
        totalCount: number;
    }>;
    filterbyIngredient(ingredient: string, page: number, limit: number): Promise<{
        recipes: Recipe[];
        totalCount: number;
    }>;
}
//# sourceMappingURL=index.d.ts.map