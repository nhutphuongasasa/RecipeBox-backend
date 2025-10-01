import express from "express";
import { RecipeRepository } from "./infrastructure/repo";
import { RecipeUseCase } from "./domian/use-case";
import { RecipeHttpService } from "./infrastructure/transport";
import { PrismaClient } from "../../generated/prisma";
import { ingredientUseCase } from "../ingredient";
import { categoryUseCase } from "../category";
import { statsUseCase } from "../stats";
import { userUseCase } from "../user";
import { validateToken } from "../../middleware/jwt/validate";

export const setupRecipeRoutes = () => {
  const prisma = new PrismaClient();

  const repository = new RecipeRepository(prisma);
  const IngredientUseCase = ingredientUseCase();
  const CategoryUseCase = categoryUseCase();
  const StatsUseCase = statsUseCase();
  const UserUseCase = userUseCase();
  const useCase = new RecipeUseCase(
    repository,
    IngredientUseCase,
    CategoryUseCase,
    StatsUseCase,
    UserUseCase
  );
  const httpService = new RecipeHttpService(useCase);

  const router = express.Router();

  router.get("/", httpService.getAllRecipe.bind(httpService));
  router.get(
    "/me",
    validateToken,
    httpService.getRecipeByUserId.bind(httpService)
  );
  router.get(
    "/count/:category",
    validateToken,
    httpService.countRecipeByCategory.bind(httpService)
  );
  router.get(
    "/top",
    validateToken,
    httpService.topRecipeByFavorite.bind(httpService)
  );
  router.post("/", validateToken, httpService.createRecipe.bind(httpService));
  router.put("/:id", validateToken, httpService.updateRecipe.bind(httpService));
  router.delete(
    "/:id",
    validateToken,
    httpService.deleteRecipe.bind(httpService)
  );
  router.get("/:id", httpService.getRecipeById.bind(httpService));
  router.get(
    "/category/:category",
    httpService.filterbyCategory.bind(httpService)
  );
  router.get(
    "/ingredient/:ingredient",
    httpService.filterbyIngredient.bind(httpService)
  );
  router.get("/name/:name", httpService.getRecipeByName.bind(httpService));

  return router;
};

export const recipeUseCase = () => {
  const prisma = new PrismaClient();

  const repository = new RecipeRepository(prisma);
  const IngredientUseCase = ingredientUseCase();
  const CategoryUseCase = categoryUseCase();
  const StatsUseCase = statsUseCase();
  const UserUseCase = userUseCase();
  const useCase = new RecipeUseCase(
    repository,
    IngredientUseCase,
    CategoryUseCase,
    StatsUseCase,
    UserUseCase
  );

  return useCase;
};
