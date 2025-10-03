import { IStepUseCase } from "../../interface";
import { NextFunction, Request, Response } from "express";
export declare class StepHttpService {
    private useCase;
    constructor(useCase: IStepUseCase);
    getStepsByRecipeId(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    createStep(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    deleteStep(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    updateStep(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    getStepById(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=http-service.d.ts.map