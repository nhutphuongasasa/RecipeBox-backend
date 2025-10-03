import { CreateCommentDto, ResponseCommentDto, UpdateCommentDto } from "../domain/model/dto";
import { CommentEntity } from "../domain/model/comment";
export interface ICommentUseCase {
    createComment(comment: CreateCommentDto): Promise<ResponseCommentDto>;
    updateComment(id: string, comment: UpdateCommentDto): Promise<ResponseCommentDto>;
    deleteComment(id: string): Promise<ResponseCommentDto>;
    getCommentByRecipeId(recipeId: string): Promise<ResponseCommentDto[]>;
    getCommentByUserId(userId: string): Promise<ResponseCommentDto[]>;
}
export interface ICommentRepository {
    getById(id: string): Promise<CommentEntity | null>;
    createComment(comment: CreateCommentDto): Promise<CommentEntity>;
    updateComment(id: string, comment: UpdateCommentDto): Promise<CommentEntity>;
    deleteComment(id: string): Promise<CommentEntity>;
    getCommentByRecipeId(recipeId: string): Promise<CommentEntity[] | null>;
    getCommentByUserId(userId: string): Promise<CommentEntity[] | null>;
}
//# sourceMappingURL=index.d.ts.map