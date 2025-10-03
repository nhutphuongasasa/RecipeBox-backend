import { NextFunction, Request, Response } from "express";
import { UserUseCase } from "../../domain/use-case";
export declare class UserHttpService {
    private userUseCase;
    constructor(userUseCase: UserUseCase);
    registerUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    loginUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    getUserById(req: Request, res: Response, next: NextFunction): Promise<void>;
    createUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    getUserByEmail(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=http-service.d.ts.map