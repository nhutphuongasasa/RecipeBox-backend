import { NextFunction, Request, Response } from "express";
import { ICommentUseCase } from "../../interface";
import { CreateCommentDto } from "../../domain/model/dto";

export class CommentHttpService {
  constructor(private commentUseCase: ICommentUseCase) {}

  async createComment(req: Request, res: Response, next: NextFunction) {
    try {
      const commentRequest = CreateCommentDto.parse(req.body);
      const comment = await this.commentUseCase.createComment(commentRequest);
      res.status(201).json(comment);
    } catch (error) {
      next(error);
    }
  }

  async updateComment(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new Error("Comment not found");
      }
      const commentRequest = CreateCommentDto.parse(req.body);
      const comment = await this.commentUseCase.updateComment(
        id,
        commentRequest
      );
      res.status(201).json(comment);
    } catch (error) {
      next(error);
    }
  }

  async deleteComment(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new Error("Comment not found");
      }
      const comment = await this.commentUseCase.deleteComment(id);
      res.status(201).json(comment);
    } catch (error) {
      next(error);
    }
  }

  async getCommentByRecipeId(req: Request, res: Response, next: NextFunction) {
    try {
      const recipeId = req.params.recipeId;
      if (!recipeId) {
        throw new Error("Recipe not found");
      }
      const comment = await this.commentUseCase.getCommentByRecipeId(recipeId);
      res.status(201).json(comment);
    } catch (error) {
      next(error);
    }
  }

  async getCommentByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.userId;
      if (!userId) {
        throw new Error("User not found");
      }
      const comment = await this.commentUseCase.getCommentByUserId(userId);
      res.status(201).json(comment);
    } catch (error) {
      next(error);
    }
  }
}
