import { NextFunction, Request, Response } from "express";
import { CreateCategoryDto, UpdateCategoryDto } from "../../domain/model/dto";
import { ICategoryUseCase } from "../../interface";

export class CategoryHttpService {
  constructor(private categoryUseCase: ICategoryUseCase) {}

  async getCategoryById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id) {
        throw new Error("Category ID is required");
      }
      const category = await this.categoryUseCase.getCategoryById(id);
      if (!category) {
        throw new Error("Category not found");
      }
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  async getAllCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await this.categoryUseCase.getAllCategory();
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }

  async getCategoryByName(req: Request, res: Response, next: NextFunction) {
    try {
      const name = req.params.name;
      if (!name) {
        throw new Error("Category name is required");
      }
      const category = await this.categoryUseCase.getCategoryByName(name);
      if (!category) {
        throw new Error("Category not found");
      }
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  async createCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const createCategoryRequest = CreateCategoryDto.parse(req.body);

      const category = await this.categoryUseCase.createCategory(
        createCategoryRequest
      );
      res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  }

  async updateCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const updateCategoryRequest = UpdateCategoryDto.parse(req.body);
      const categoryId = req.params.id;
      if (!categoryId) {
        throw new Error("Category ID is required");
      }
      const category = await this.categoryUseCase.updateCategory(
        categoryId,
        updateCategoryRequest
      );
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  async deleteCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const categoryId = req.params.id;
      if (!categoryId) {
        throw new Error("Category ID is required");
      }
      const category = await this.categoryUseCase.deleteCategory(categoryId);
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }
}
