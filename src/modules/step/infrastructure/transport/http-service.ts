import { IStepUseCase } from "../../interface";
import { Step } from "../../domain/model/model";
import { NextFunction, Request, Response } from "express";
import { CreateStepDto, UpdateStepDto } from "../../domain/model/dto";

export class StepHttpService {
  constructor(private useCase: IStepUseCase) {}

  async getStepsByRecipeId(req: Request, res: Response, next: NextFunction) {
    try {
      const recipeId = req.params.recipeId;

      if (!recipeId) {
        return res.status(400).json({ error: "Recipe ID is required" });
      }

      const steps = await this.useCase.getStepsByRecipeId(recipeId);
      return res.json(steps);
    } catch (error) {
      next(error);
    }
  }

  async createStep(req: Request, res: Response, next: NextFunction) {
    try {
      const request = CreateStepDto.parse(req.body);

      const step = await this.useCase.createStep(request);
      return res.json(step);
    } catch (error) {
      next(error);
    }
  }

  async deleteStep(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;

      if (!id) {
        return res.status(400).json({ error: "ID is required" });
      }

      const step = await this.useCase.deleteStep(id);
      return res.json(step);
    } catch (error) {
      next(error);
    }
  }

  async updateStep(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const request = UpdateStepDto.parse(req.body);

      if (!id) {
        return res.status(400).json({ error: "ID is required" });
      }

      const step = await this.useCase.updateStep(id, request);
      return res.json(step);
    } catch (error) {
      next(error);
    }
  }

  async getStepById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;

      if (!id) {
        return res.status(400).json({ error: "ID is required" });
      }

      const step = await this.useCase.getStepById(id);
      return res.json(step);
    } catch (error) {
      next(error);
    }
  }
}
