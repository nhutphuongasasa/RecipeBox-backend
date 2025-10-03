import { IFavoriteUseCase } from "../../interface";
import { NextFunction, Request, Response } from "express";
export declare class FavoriteHttpService {
    private favoriteUseCase;
    constructor(favoriteUseCase: IFavoriteUseCase);
    createFavorite(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteFavorite(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getFavoriteByRecipeId(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getFavoriteByUserId(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=http-service.d.ts.map