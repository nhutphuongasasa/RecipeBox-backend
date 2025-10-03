import { IRecipeUseCase } from "../../interface";
import { NextFunction, Request, Response } from "express";
export declare class RecipeHttpService {
    private useCase;
    constructor(useCase: IRecipeUseCase);
    topRecipeByFavorite(req: Request, res: Response, next: NextFunction): Promise<void>;
    countRecipeByCategory(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getRecipeByUserId(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getAllRecipe(req: Request, res: Response, next: NextFunction): Promise<void>;
    createRecipe(req: Request, res: Response, next: NextFunction): Promise<void>;
    getRecipeByName(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    updateRecipe(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    deleteRecipe(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getRecipeById(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    filterbyCategory(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    filterbyIngredient(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=index.d.ts.map