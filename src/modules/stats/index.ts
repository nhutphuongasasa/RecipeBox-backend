import express from "express";
import { StatsHttpService } from "./infrastructure/transport/http-service";
import { StatsRepository } from "./infrastructure/repo";
import { StatsUseCase } from "./domain/use-case";
import { PrismaClient } from "../../generated/prisma";

export const setupStatsRoutes = () => {
  const prisma = new PrismaClient();

  const repository = new StatsRepository(prisma);
  const useCase = new StatsUseCase(repository);
  const httpService = new StatsHttpService(useCase);

  const router = express.Router();

  router.post("/", httpService.createStats.bind(httpService));
  router.get(
    "/recipeId/:recipeId",
    httpService.getStateByRecipeId.bind(httpService)
  );
  router.get("/:id", httpService.getStatsById.bind(httpService));
  router.get("/best", httpService.bestRecipe.bind(httpService));
  router.put("/like/:id", httpService.updateLikes.bind(httpService));
  router.put("/view/:id", httpService.updateViews.bind(httpService));
  router.put("/favorite/:id", httpService.updateFavorites.bind(httpService));
  router.delete("/:id", httpService.deleteStats.bind(httpService));

  return router;
};

export const statsUseCase = () => {
  const prisma = new PrismaClient();

  const repository = new StatsRepository(prisma);
  const useCase = new StatsUseCase(repository);

  return useCase;
};
