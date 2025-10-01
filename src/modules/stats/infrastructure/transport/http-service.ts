import { CreateStatsDto, StatsConditionDto } from "../../domain/model/dto";
import { IStatsUseCase } from "../../interface";
import { NextFunction, Request, Response } from "express";

export class StatsHttpService {
  constructor(private useCase: IStatsUseCase) {}

  async createStats(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);
      const request = CreateStatsDto.parse(req.body);

      const stats = await this.useCase.createStats(request);
      res.status(201).json(stats);
    } catch (error) {
      next(error);
    }
  }

  async deleteStats(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;

      if (!id) {
        return res.status(400).json({ error: "Invalid stats ID" });
      }

      const stats = await this.useCase.deleteStats(id);
      res.status(200).json(stats);
    } catch (error) {
      next(error);
    }
  }

  async getStatsById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;

      if (!id) {
        return res.status(400).json({ error: "Invalid stats ID" });
      }

      const stats = await this.useCase.getStatsById(id);
      res.status(200).json(stats);
    } catch (error) {
      next(error);
    }
  }

  async updateLikes(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const action = req.body.action;

      if (!id) {
        return res.status(400).json({ error: "Invalid stats ID" });
      }

      const stats = await this.useCase.updateLikes(id, action);
      res.status(200).json(stats);
    } catch (error) {
      next(error);
    }
  }

  async updateViews(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const action = req.body.action;

      if (!id) {
        return res.status(400).json({ error: "Invalid stats ID" });
      }

      const stats = await this.useCase.updateViews(id, action);
      res.status(200).json(stats);
    } catch (error) {
      next(error);
    }
  }

  async getStateByRecipeId(req: Request, res: Response, next: NextFunction) {
    try {
      const recipeId = req.params.recipeId;

      if (!recipeId) {
        return res.status(400).json({ error: "Invalid recipe ID" });
      }

      const stats = await this.useCase.getStateByRecipeId(recipeId);
      res.status(200).json(stats);
    } catch (error) {
      next(error);
    }
  }

  async updateFavorites(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const action = req.body.action;

      if (!id) {
        return res.status(400).json({ error: "Invalid stats ID" });
      }

      const stats = await this.useCase.updateFavoritesByRecipeId(id, action);
      res.status(200).json(stats);
    } catch (error) {
      next(error);
    }
  }

  async bestRecipe(req: Request, res: Response, next: NextFunction) {
    try {
      const limit = parseInt(req.query.limit as string);
      const condition = StatsConditionDto.parse(req.body);

      const stats = await this.useCase.bestRecipe(limit, condition);
      res.status(200).json(stats);
    } catch (error) {
      next(error);
    }
  }
}
