"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUseCase = void 0;
const dto_1 = require("../model/dto");
class CommentUseCase {
    commentRepository;
    userUseCase;
    recipeUseCase;
    constructor(commentRepository, userUseCase, recipeUseCase) {
        this.commentRepository = commentRepository;
        this.userUseCase = userUseCase;
        this.recipeUseCase = recipeUseCase;
    }
    async createComment(commentRequest) {
        const user = await this.userUseCase.getUserById(commentRequest.userId);
        if (!user) {
            throw new Error("User not found");
        }
        const recipe = await this.recipeUseCase.getRecipeById(commentRequest.recipeId, {
            userId: commentRequest.userId,
        });
        if (!recipe) {
            throw new Error("Recipe not found");
        }
        const comment = await this.commentRepository.createComment(commentRequest);
        return dto_1.ResponseCommentDto.parse(comment);
    }
    async updateComment(id, commentRequest) {
        const comment = await this.commentRepository.getById(id);
        if (!comment) {
            throw new Error("Comment not found");
        }
        return dto_1.ResponseCommentDto.parse(await this.commentRepository.updateComment(id, commentRequest));
    }
    async deleteComment(id) {
        const comment = await this.commentRepository.getById(id);
        if (!comment) {
            throw new Error("Comment not found");
        }
        return dto_1.ResponseCommentDto.parse(await this.commentRepository.deleteComment(id));
    }
    async getCommentByRecipeId(recipeId) {
        // return ResponseCommentDto.parse(
        //   await this.commentRepository.getCommentByRecipeId(recipeId)
        // );
        throw new Error("Method not implemented.");
    }
    async getCommentByUserId(userId) {
        // return ResponseCommentDto.parse(
        //   await this.commentRepository.getCommentByUserId(userId)
        // );
        throw new Error("Method not implemented.");
    }
}
exports.CommentUseCase = CommentUseCase;
//# sourceMappingURL=index.js.map