import express from "express";
import { StepHttpService } from "./infrastructure/transport/http-service";
import { StepRepository } from "./infrastructure/repo";
import { StepUseCase } from "./domain/use-case";
import { PrismaClient } from "../../generated/prisma";

export const setupStepRoutes = () => {
  const prisma = new PrismaClient();

  const repository = new StepRepository(prisma);
  const useCase = new StepUseCase(repository);
  const httpService = new StepHttpService(useCase);

  const router = express.Router();

  router.post("/", httpService.createStep.bind(httpService));
  router.delete("/:id", httpService.deleteStep.bind(httpService));
  router.get("/:id", httpService.getStepById.bind(httpService));
  router.put("/:id", httpService.updateStep.bind(httpService));
  router.get(
    "/recipe/:recipeId",
    httpService.getStepsByRecipeId.bind(httpService)
  );

  return router;
};

export const stepUseCase = () => {
  const prisma = new PrismaClient();

  const repository = new StepRepository(prisma);
  const useCase = new StepUseCase(repository);

  return useCase;
};
