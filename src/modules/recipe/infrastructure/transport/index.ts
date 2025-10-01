import { IRecipeUseCase } from "../../interface";
import { NextFunction, Request, Response } from "express";

export class RecipeHttpService {
  constructor(private useCase: IRecipeUseCase) {}

  async topRecipeByFavorite(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.id!;

      const recipe = await this.useCase.topRecipeByFavorite(userId);
      res.status(200).json(recipe);
    } catch (error) {
      next(error);
    }
  }

  async countRecipeByCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const category = req.params.category;
      const userId = req.id!;

      if (!category) {
        return res.status(400).json({ error: "Invalid category" });
      }

      const count = await this.useCase.countRecipeByCategory(category, userId);
      res.status(200).json(count);
    } catch (error) {
      next(error);
    }
  }

  async getRecipeByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.id;

      if (!userId) {
        return res.status(400).json({ error: "Invalid user ID" });
      }

      const recipe = await this.useCase.getRecipeByUserId(userId);
      res.status(200).json(recipe);
    } catch (error) {
      next(error);
    }
  }

  async getAllRecipe(req: Request, res: Response, next: NextFunction) {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 3;

      const userId = req.id;

      const cond = {
        userId: userId,
      };

      const recipes = await this.useCase.getAllRecipe(page, limit, cond);
      res.status(200).json(recipes);
    } catch (error) {
      next(error);
    }
  }

  async createRecipe(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.id!;
      const recipe = await this.useCase.createRecipe(req.body, userId);
      res.status(201).json(recipe);
    } catch (error) {
      next(error);
    }
  }

  async getRecipeByName(req: Request, res: Response, next: NextFunction) {
    try {
      const name = req.params.name;

      if (!name) {
        return res.status(400).json({ error: "Invalid recipe name" });
      }

      const recipe = await this.useCase.getRecipeByName(name);
      res.status(200).json(recipe);
    } catch (error) {
      next(error);
    }
  }

  async updateRecipe(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;

      if (!id) {
        return res.status(400).json({ error: "Invalid recipe ID" });
      }

      const userId = req.id!;

      const recipe = await this.useCase.updateRecipe(id, req.body, userId);
      res.status(200).json(recipe);
    } catch (error) {
      next(error);
    }
  }

  async deleteRecipe(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;

      if (!id) {
        return res.status(400).json({ error: "Invalid recipe ID" });
      }

      const recipe = await this.useCase.deleteRecipe(id);
      res.status(200).json(recipe);
    } catch (error) {
      next(error);
    }
  }

  async getRecipeById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const userId = req.id;

      if (!id) {
        return res.status(400).json({ error: "Invalid recipe ID" });
      }

      const recipe = await this.useCase.getRecipeById(id, {
        userId,
      });
      res.status(200).json(recipe);
    } catch (error) {
      next(error);
    }
  }

  async filterbyCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const category = req.params.category;

      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;

      if (!category) {
        return res.status(400).json({ error: "Invalid category" });
      }

      const recipes = await this.useCase.filterbyCategory(
        category,
        page,
        limit
      );
      res.status(200).json(recipes);
    } catch (error) {
      next(error);
    }
  }

  async filterbyIngredient(req: Request, res: Response, next: NextFunction) {
    try {
      const ingredient = req.params.ingredient;

      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;

      if (!ingredient) {
        return res.status(400).json({ error: "Invalid ingredient" });
      }

      const recipes = await this.useCase.filterbyIngredient(
        ingredient,
        page,
        limit
      );
      res.status(200).json(recipes);
    } catch (error) {
      next(error);
    }
  }
}
