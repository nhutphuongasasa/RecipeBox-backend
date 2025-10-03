import { IRecipeRepository } from "../../interface";
import { ConditionDto, CreateRecipeDto, ResponseRecipeDto, UpdateRecipeDto } from "../../domian/model/dto";
import { Recipe } from "../../domian/model/recipe";
import { PrismaClient } from "../../../../generated/prisma";
export declare class RecipeRepository implements IRecipeRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    countRecipeByCategory(category: string, userId: string): Promise<number>;
    getRecipeByUserId(userId: string): Promise<ResponseRecipeDto[] | null>;
    getAllRecipe(page: number, limit: number, cond: ConditionDto): Promise<{
        recipes: Recipe[];
        totalCount: number;
    } | null>;
    getRecipeByName(name: string): Promise<Recipe | null>;
    createRecipe(recipe: CreateRecipeDto, userId: string): Promise<Recipe>;
    updateRecipe(id: string, recipe: UpdateRecipeDto, userId: string): Promise<Recipe>;
    deleteRecipe(id: string): Promise<Recipe>;
    getRecipeById(id: string, cond: ConditionDto): Promise<ResponseRecipeDto | null>;
    filterbyCategory(categoryName: string, page: number, limit: number): Promise<{
        recipes: Recipe[];
        totalCount: number;
    }>;
    filterbyIngredient(ingredient: string, page: number, limit: number): Promise<{
        recipes: Recipe[];
        totalCount: number;
    }>;
}
//# sourceMappingURL=index.d.ts.map