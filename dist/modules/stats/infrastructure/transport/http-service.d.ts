import { IStatsUseCase } from "../../interface";
import { NextFunction, Request, Response } from "express";
export declare class StatsHttpService {
    private useCase;
    constructor(useCase: IStatsUseCase);
    createStats(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteStats(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getStatsById(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    updateLikes(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    updateViews(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getStateByRecipeId(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    updateFavorites(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    bestRecipe(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=http-service.d.ts.map