import { IRatingUseCase } from "../../interface";
import { NextFunction, Request, Response } from "express";
export declare class RatingHttpService {
    private useCase;
    constructor(useCase: IRatingUseCase);
    createRating(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateRating(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    deleteRating(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getRatingById(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=http-service.d.ts.map