import express from "express";
import { UserRepository } from "./infrastructure/repo";
import { UserUseCase } from "./domain/use-case";
import { UserHttpService } from "./infrastructure/transport/http-service";
import { PrismaClient } from "../../generated/prisma";
import { validateToken } from "../../middleware/jwt/validate";

export const setupUserRoutes = () => {
  const prisma = new PrismaClient();

  const repository = new UserRepository(prisma);
  const useCase = new UserUseCase(repository);
  const httpService = new UserHttpService(useCase);

  const router = express.Router();

  router.post("/register", httpService.registerUser.bind(httpService));
  router.post("/login", httpService.loginUser.bind(httpService));
  router.get("/:id", httpService.getUserById.bind(httpService));
  router.post("/", httpService.createUser.bind(httpService));
  router.put("/", validateToken, httpService.updateUser.bind(httpService));
  router.delete("/:id", httpService.deleteUser.bind(httpService));
  router.get("/email/:email", httpService.getUserByEmail.bind(httpService));

  return router;
};

export const userUseCase = () => {
  const prisma = new PrismaClient();

  const repository = new UserRepository(prisma);
  const useCase = new UserUseCase(repository);

  return useCase;
};
