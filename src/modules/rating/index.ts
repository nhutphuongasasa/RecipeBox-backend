import { PrismaClient } from "../../generated/prisma";
import { RatingHttpService } from "./infrastructure/transport/http-service";
import { RatingRepository } from "./infrastructure/repo";
import { RatingUseCase } from "./domain/use-case";
import express from "express";

export const setupRatingRoutes = () => {
  const prisma = new PrismaClient();
  const repository = new RatingRepository(prisma);
  const useCase = new RatingUseCase(repository);
  const httpService = new RatingHttpService(useCase);

  const router = express.Router();

  router.post("/", httpService.createRating);
  router.put("/:id", httpService.updateRating);
  router.delete("/:id", httpService.deleteRating);
  router.get("/:id", httpService.getRatingById);

  return router;
};

export const ratingUseCase = () => {
  const prisma = new PrismaClient();
  const repository = new RatingRepository(prisma);
  const useCase = new RatingUseCase(repository);
  return useCase;
};
