import { ICommentRepository } from "../../interface";
import { CommentEntity } from "../../domain/model/comment";
import { CreateCommentDto, UpdateCommentDto } from "../../domain/model/dto";
import { PrismaClient } from "../../../../generated/prisma";
export declare class CommentRepository implements ICommentRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    getById(id: string): Promise<CommentEntity | null>;
    createComment(comment: CreateCommentDto): Promise<CommentEntity>;
    updateComment(id: string, comment: UpdateCommentDto): Promise<CommentEntity>;
    deleteComment(id: string): Promise<CommentEntity>;
    getCommentByRecipeId(recipeId: string): Promise<CommentEntity[]>;
    getCommentByUserId(userId: string): Promise<CommentEntity[]>;
}
//# sourceMappingURL=index.d.ts.map