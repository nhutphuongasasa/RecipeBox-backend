import { IngredientUseCase } from "../../domain/use-case";
import { NextFunction, Request, Response } from "express";
export declare class IngredientHttpService {
    private useCase;
    constructor(useCase: IngredientUseCase);
    getIngredientByName(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    createIngredient(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateIngredient(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    deleteIngredient(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getIngredientById(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=http-service.d.ts.map