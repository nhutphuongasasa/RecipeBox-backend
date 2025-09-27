import { PrismaClient } from "../../generated/prisma";
import { IngredientHttpService } from "./infrastructure/transport/http-service";
import { IngredientRepository } from "./infrastructure/repo";
import { IngredientUseCase } from "./domain/use-case";
import express from "express";

export const setupIngredientRoutes = () => {
  const prisma = new PrismaClient();

  const repository = new IngredientRepository(prisma);
  const useCase = new IngredientUseCase(repository);
  const httpService = new IngredientHttpService(useCase);

  const router = express.Router();

  router.get("/", httpService.getIngredientByName.bind(httpService));
  router.get("/:id", httpService.getIngredientById.bind(httpService));
  router.post("/", httpService.createIngredient.bind(httpService));
  router.put("/:id", httpService.updateIngredient.bind(httpService));
  router.delete("/:id", httpService.deleteIngredient.bind(httpService));

  return router;
};

export const ingredientUseCase = () => {
  const prisma = new PrismaClient();
  const repository = new IngredientRepository(prisma);
  const useCase = new IngredientUseCase(repository);
  return useCase;
};
