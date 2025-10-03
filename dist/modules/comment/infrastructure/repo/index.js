"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRepository = void 0;
class CommentRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getById(id) {
        return await this.prisma.comment.findUnique({
            where: {
                id,
            },
        });
    }
    async createComment(comment) {
        return await this.prisma.comment.create({
            data: comment,
        });
    }
    async updateComment(id, comment) {
        return await this.prisma.comment.update({
            where: {
                id,
            },
            data: comment,
        });
    }
    async deleteComment(id) {
        return await this.prisma.comment.delete({
            where: {
                id,
            },
        });
    }
    async getCommentByRecipeId(recipeId) {
        return await this.prisma.comment.findMany({
            where: {
                recipeId,
            },
        });
    }
    async getCommentByUserId(userId) {
        return await this.prisma.comment.findMany({
            where: {
                userId,
            },
        });
    }
}
exports.CommentRepository = CommentRepository;
//# sourceMappingURL=index.js.map