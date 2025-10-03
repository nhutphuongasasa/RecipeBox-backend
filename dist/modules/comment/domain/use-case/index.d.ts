import { ICommentRepository } from "../../interface";
import { CreateCommentDto, ResponseCommentDto, UpdateCommentDto } from "../model/dto";
import { ICommentUseCase } from "../../interface";
import { IUserUseCase } from "../../../user/interface";
import { IRecipeUseCase } from "../../../recipe/interface";
export declare class CommentUseCase implements ICommentUseCase {
    private commentRepository;
    private userUseCase;
    private recipeUseCase;
    constructor(commentRepository: ICommentRepository, userUseCase: IUserUseCase, recipeUseCase: IRecipeUseCase);
    createComment(commentRequest: CreateCommentDto): Promise<ResponseCommentDto>;
    updateComment(id: string, commentRequest: UpdateCommentDto): Promise<ResponseCommentDto>;
    deleteComment(id: string): Promise<ResponseCommentDto>;
    getCommentByRecipeId(recipeId: string): Promise<ResponseCommentDto[]>;
    getCommentByUserId(userId: string): Promise<ResponseCommentDto[]>;
}
//# sourceMappingURL=index.d.ts.map