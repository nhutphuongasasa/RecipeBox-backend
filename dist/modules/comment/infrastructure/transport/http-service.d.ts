import { NextFunction, Request, Response } from "express";
import { ICommentUseCase } from "../../interface";
export declare class CommentHttpService {
    private commentUseCase;
    constructor(commentUseCase: ICommentUseCase);
    createComment(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateComment(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteComment(req: Request, res: Response, next: NextFunction): Promise<void>;
    getCommentByRecipeId(req: Request, res: Response, next: NextFunction): Promise<void>;
    getCommentByUserId(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=http-service.d.ts.map