import { IFavoriteUseCase } from "../../interface";
import { NextFunction, Request, Response } from "express";

export class FavoriteHttpService {
  constructor(private favoriteUseCase: IFavoriteUseCase) {}

  async createFavorite(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.id!;
      const favorite = await this.favoriteUseCase.createFavorite(
        req.body,
        userId
      );
      res.status(201).json(favorite);
    } catch (error) {
      next(error);
    }
  }

  async deleteFavorite(req: Request, res: Response, next: NextFunction) {
    try {
      const recipeId = req.params.recipeId;
      const userId = req.id!;

      if (!recipeId) {
        return res.status(400).json({
          message: "Invalid recipeId",
        });
      }

      const favorite = await this.favoriteUseCase.deleteFavoriteByRecipeId(
        recipeId,
        userId
      );
      res.status(200).json(favorite);
    } catch (error) {
      next(error);
    }
  }

  async getFavoriteByRecipeId(req: Request, res: Response, next: NextFunction) {
    try {
      const recipeId = req.params.recipeId;

      if (!recipeId) {
        return res.status(400).json({
          message: "Invalid recipeId",
        });
      }

      const favorite = await this.favoriteUseCase.getFavoriteByRecipeId(
        recipeId
      );
      res.status(200).json(favorite);
    } catch (error) {
      next(error);
    }
  }

  async getFavoriteByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.userId;

      if (!userId) {
        return res.status(400).json({
          message: "Invalid userId",
        });
      }

      const favorite = await this.favoriteUseCase.getFavoriteByUserId(userId);
      res.status(200).json(favorite);
    } catch (error) {
      next(error);
    }
  }
}
