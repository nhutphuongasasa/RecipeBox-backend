import express from "express";
import { CategoryHttpService } from "./infrastructure/transport/http-service";
import { CategoryRepository } from "./infrastructure/repo";
import { CategoryUseCase } from "./domain/use-case";
import { PrismaClient } from "../../generated/prisma";

export const setupCategoryRoutes = () => {
  const prisma = new PrismaClient();

  const repository = new CategoryRepository(prisma);
  const useCase = new CategoryUseCase(repository);
  const httpService = new CategoryHttpService(useCase);

  const router = express.Router();

  router.get("/", httpService.getAllCategory.bind(httpService));
  router.get("/id/:id", httpService.getCategoryById.bind(httpService));
  router.get("/name/:name", httpService.getCategoryByName.bind(httpService));
  router.post("/", httpService.createCategory.bind(httpService));
  router.put("/:id", httpService.updateCategory.bind(httpService));
  router.delete("/:id", httpService.deleteCategory.bind(httpService));

  return router;
};

export const categoryUseCase = () => {
  const prisma = new PrismaClient();

  const repository = new CategoryRepository(prisma);
  const useCase = new CategoryUseCase(repository);

  return useCase;
};
