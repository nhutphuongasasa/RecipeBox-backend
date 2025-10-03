"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentHttpService = void 0;
const dto_1 = require("../../domain/model/dto");
class CommentHttpService {
    commentUseCase;
    constructor(commentUseCase) {
        this.commentUseCase = commentUseCase;
    }
    async createComment(req, res, next) {
        try {
            const commentRequest = dto_1.CreateCommentDto.parse(req.body);
            const comment = await this.commentUseCase.createComment(commentRequest);
            res.status(201).json(comment);
        }
        catch (error) {
            next(error);
        }
    }
    async updateComment(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                throw new Error("Comment not found");
            }
            const commentRequest = dto_1.CreateCommentDto.parse(req.body);
            const comment = await this.commentUseCase.updateComment(id, commentRequest);
            res.status(201).json(comment);
        }
        catch (error) {
            next(error);
        }
    }
    async deleteComment(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                throw new Error("Comment not found");
            }
            const comment = await this.commentUseCase.deleteComment(id);
            res.status(201).json(comment);
        }
        catch (error) {
            next(error);
        }
    }
    async getCommentByRecipeId(req, res, next) {
        try {
            const recipeId = req.params.recipeId;
            if (!recipeId) {
                throw new Error("Recipe not found");
            }
            const comment = await this.commentUseCase.getCommentByRecipeId(recipeId);
            res.status(201).json(comment);
        }
        catch (error) {
            next(error);
        }
    }
    async getCommentByUserId(req, res, next) {
        try {
            const userId = req.params.userId;
            if (!userId) {
                throw new Error("User not found");
            }
            const comment = await this.commentUseCase.getCommentByUserId(userId);
            res.status(201).json(comment);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.CommentHttpService = CommentHttpService;
//# sourceMappingURL=http-service.js.map