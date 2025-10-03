"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentUseCase = exports.setupCommentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const repo_1 = require("./infrastructure/repo");
const use_case_1 = require("./domain/use-case");
const http_service_1 = require("./infrastructure/transport/http-service");
const prisma_1 = require("../../generated/prisma");
const user_1 = require("../user");
const recipe_1 = require("../recipe");
const setupCommentRoutes = () => {
    const UserUseCase = (0, user_1.userUseCase)();
    const RecipeUseCase = (0, recipe_1.recipeUseCase)();
    const prisma = new prisma_1.PrismaClient();
    const repository = new repo_1.CommentRepository(prisma);
    const useCase = new use_case_1.CommentUseCase(repository, UserUseCase, RecipeUseCase);
    const httpService = new http_service_1.CommentHttpService(useCase);
    const router = express_1.default.Router();
    router.post("/", httpService.createComment);
    router.put("/:id", httpService.updateComment);
    router.delete("/:id", httpService.deleteComment);
    router.get("/:recipeId", httpService.getCommentByRecipeId);
    router.get("/:userId", httpService.getCommentByUserId);
    return router;
};
exports.setupCommentRoutes = setupCommentRoutes;
const commentUseCase = () => {
    const UserUseCase = (0, user_1.userUseCase)();
    const RecipeUseCase = (0, recipe_1.recipeUseCase)();
    const prisma = new prisma_1.PrismaClient();
    const repository = new repo_1.CommentRepository(prisma);
    const useCase = new use_case_1.CommentUseCase(repository, UserUseCase, RecipeUseCase);
    return useCase;
};
exports.commentUseCase = commentUseCase;
//# sourceMappingURL=index.js.map