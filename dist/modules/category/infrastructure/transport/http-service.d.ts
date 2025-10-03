import { NextFunction, Request, Response } from "express";
import { ICategoryUseCase } from "../../interface";
export declare class CategoryHttpService {
    private categoryUseCase;
    constructor(categoryUseCase: ICategoryUseCase);
    getCategoryById(req: Request, res: Response, next: NextFunction): Promise<void>;
    getAllCategory(req: Request, res: Response, next: NextFunction): Promise<void>;
    getCategoryByName(req: Request, res: Response, next: NextFunction): Promise<void>;
    createCategory(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateCategory(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteCategory(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=http-service.d.ts.map