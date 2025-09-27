import { IngredientUseCase } from "../../domain/use-case";
import { CreateIngredientDto } from "../../domain/model/dto";
import { ResponseIngredientDto } from "../../domain/model/dto";
import { UpdateIngredientDto } from "../../domain/model/dto";
import { NextFunction, Request, Response } from "express";

export class IngredientHttpService {
  constructor(private useCase: IngredientUseCase) {}

  async getIngredientByName(req: Request, res: Response, next: NextFunction) {
    try {
      const name = req.query.name as string;

      if (!name) {
        return res.status(400).json({ error: "Invalid ingredient name" });
      }

      const ingredient = await this.useCase.getIngredientByName(name);
      res.status(200).json(ingredient);
    } catch (error) {
      next(error);
    }
  }

  async createIngredient(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("req.body", req.body);

      const request = CreateIngredientDto.parse(req.body);

      const ingredient = await this.useCase.createIngredient(request);
      res.status(201).json(ingredient);
    } catch (error) {
      next(error);
    }
  }

  async updateIngredient(req: Request, res: Response, next: NextFunction) {
    try {
      const request = UpdateIngredientDto.parse(req.body);
      const id = req.params.id;

      if (!id) {
        return res.status(400).json({ error: "Invalid ingredient ID" });
      }

      const ingredient = await this.useCase.updateIngredient(id, request);
      res.status(200).json(ingredient);
    } catch (error) {
      next(error);
    }
  }

  async deleteIngredient(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;

      if (!id) {
        return res.status(400).json({ error: "Invalid ingredient ID" });
      }

      const ingredient = await this.useCase.deleteIngredient(id);
      res.status(200).json(ingredient);
    } catch (error) {
      next(error);
    }
  }

  async getIngredientById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;

      if (!id) {
        return res.status(400).json({ error: "Invalid ingredient ID" });
      }

      const ingredient = await this.useCase.getIngredientById(id);
      res.status(200).json(ingredient);
    } catch (error) {
      next(error);
    }
  }
}
