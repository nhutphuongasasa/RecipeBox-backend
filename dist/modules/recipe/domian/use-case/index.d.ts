import { CategoryUseCase } from "../../../category/domain/use-case";
import { IngredientUseCase } from "../../../ingredient/domain/use-case";
import { IStatsUseCase } from "../../../stats/interface";
import { IUserUseCase } from "../../../user/interface";
import { IRecipeRepository, IRecipeUseCase } from "../../interface";
import { ConditionDto, CreateRecipeDto, ResponseRecipeDto, UpdateRecipeDto } from "../model/dto";
export declare class RecipeUseCase implements IRecipeUseCase {
    private repository;
    private ingredientUseCase;
    private categoryUseCase;
    private statsUseCase;
    private userUseCase;
    constructor(repository: IRecipeRepository, ingredientUseCase: IngredientUseCase, categoryUseCase: CategoryUseCase, statsUseCase: IStatsUseCase, userUseCase: IUserUseCase);
    topRecipeByFavorite(userId: string): Promise<any>;
    countRecipeByCategory(category: string, userId: string): Promise<number>;
    getRecipeByUserId(userId: string): Promise<ResponseRecipeDto[] | null>;
    createRecipe(recipe: CreateRecipeDto, userId: string): Promise<ResponseRecipeDto>;
    updateRecipe(id: string, updateRecipe: UpdateRecipeDto, userId: string): Promise<ResponseRecipeDto>;
    deleteRecipe(id: string): Promise<ResponseRecipeDto>;
    getRecipeById(id: string, cond: ConditionDto): Promise<ResponseRecipeDto>;
    getAllRecipe(page: number, limit: number, cond: ConditionDto): Promise<{
        recipes: ResponseRecipeDto[];
        totalCount: number;
    }>;
    filterbyCategory(category: string, page: number, limit: number): Promise<{
        recipes: ResponseRecipeDto[];
        totalCount: number;
    }>;
    filterbyIngredient(ingredient: string, page: number, limit: number): Promise<{
        recipes: ResponseRecipeDto[];
        totalCount: number;
    }>;
    getRecipeByName(name: string): Promise<{
        recipes: ResponseRecipeDto[];
        totalCount: number;
    }>;
}
//# sourceMappingURL=index.d.ts.map