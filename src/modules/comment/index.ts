import express from "express";
import { CommentRepository } from "./infrastructure/repo";
import { CommentUseCase } from "./domain/use-case";
import { CommentHttpService } from "./infrastructure/transport/http-service";
import { PrismaClient } from "../../generated/prisma";
import { userUseCase } from "../user";
import { recipeUseCase } from "../recipe";

export const setupCommentRoutes = () => {
  const UserUseCase = userUseCase();
  const RecipeUseCase = recipeUseCase();

  const prisma = new PrismaClient();
  const repository = new CommentRepository(prisma);
  const useCase = new CommentUseCase(repository, UserUseCase, RecipeUseCase);
  const httpService = new CommentHttpService(useCase);

  const router = express.Router();

  router.post("/", httpService.createComment);
  router.put("/:id", httpService.updateComment);
  router.delete("/:id", httpService.deleteComment);
  router.get("/:recipeId", httpService.getCommentByRecipeId);
  router.get("/:userId", httpService.getCommentByUserId);

  return router;
};

export const commentUseCase = () => {
  const UserUseCase = userUseCase();
  const RecipeUseCase = recipeUseCase();

  const prisma = new PrismaClient();
  const repository = new CommentRepository(prisma);
  const useCase = new CommentUseCase(repository, UserUseCase, RecipeUseCase);

  return useCase;
};
