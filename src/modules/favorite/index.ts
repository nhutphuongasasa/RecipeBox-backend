import { FavoriteHttpService } from "./infrastructure/transport/http-service";
import { FavoriteRepository } from "./infrastructure/repo";
import { FavoriteUseCase } from "./domain/use-case";
import { PrismaClient } from "../../generated/prisma";
import express from "express";
import { statsUseCase } from "../stats";
import { validateToken } from "../../middleware/jwt/validate";

export const setupFavoriteRoutes = () => {
  const prisma = new PrismaClient();

  const repository = new FavoriteRepository(prisma);
  const tmpStatsUseCase = statsUseCase();
  const useCase = new FavoriteUseCase(repository, tmpStatsUseCase);
  const httpService = new FavoriteHttpService(useCase);

  const router = express.Router();

  router.post("/", validateToken, httpService.createFavorite.bind(httpService));
  router.delete(
    "/:recipeId",
    validateToken,
    httpService.deleteFavorite.bind(httpService)
  );
  router.get(
    "/user/:userId",
    validateToken,
    httpService.getFavoriteByUserId.bind(httpService)
  );
  router.get(
    "/recipe/:recipeId",
    httpService.getFavoriteByRecipeId.bind(httpService)
  );

  return router;
};

export const favoriteUseCase = () => {
  const prisma = new PrismaClient();

  const repository = new FavoriteRepository(prisma);
  const testStatsUseCase = statsUseCase();
  const useCase = new FavoriteUseCase(repository, testStatsUseCase);

  return useCase;
};
