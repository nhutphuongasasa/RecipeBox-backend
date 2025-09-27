import { IRatingUseCase } from "../../interface";
import { NextFunction, Request, Response } from "express";
import { CreateRatingDto, UpdateRatingDto } from "../../domain/model/dto";

export class RatingHttpService {
  constructor(private useCase: IRatingUseCase) {}

  async createRating(req: Request, res: Response, next: NextFunction) {
    try {
      const request = CreateRatingDto.parse(req.body);

      const rating = await this.useCase.createRating(request);
      res.status(201).json(rating);
    } catch (error) {
      next(error);
    }
  }

  async updateRating(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const request = UpdateRatingDto.parse(req.body);

      if (!id) {
        return res.status(400).json({ error: "Invalid rating ID" });
      }

      const rating = await this.useCase.updateRating(id, request);
      res.status(200).json(rating);
    } catch (error) {
      next(error);
    }
  }

  async deleteRating(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;

      if (!id) {
        return res.status(400).json({ error: "Invalid rating ID" });
      }

      const rating = await this.useCase.deleteRating(id);
      res.status(200).json(rating);
    } catch (error) {
      next(error);
    }
  }

  async getRatingById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;

      if (!id) {
        return res.status(400).json({ error: "Invalid rating ID" });
      }

      const rating = await this.useCase.getRatingById(id);
      res.status(200).json(rating);
    } catch (error) {
      next(error);
    }
  }
}
