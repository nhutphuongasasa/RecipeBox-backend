"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryHttpService = void 0;
const dto_1 = require("../../domain/model/dto");
class CategoryHttpService {
    categoryUseCase;
    constructor(categoryUseCase) {
        this.categoryUseCase = categoryUseCase;
    }
    async getCategoryById(req, res, next) {
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
        }
        catch (error) {
            next(error);
        }
    }
    async getAllCategory(req, res, next) {
        try {
            const categories = await this.categoryUseCase.getAllCategory();
            res.status(200).json(categories);
        }
        catch (error) {
            next(error);
        }
    }
    async getCategoryByName(req, res, next) {
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
        }
        catch (error) {
            next(error);
        }
    }
    async createCategory(req, res, next) {
        try {
            const createCategoryRequest = dto_1.CreateCategoryDto.parse(req.body);
            const category = await this.categoryUseCase.createCategory(createCategoryRequest);
            res.status(201).json(category);
        }
        catch (error) {
            next(error);
        }
    }
    async updateCategory(req, res, next) {
        try {
            const updateCategoryRequest = dto_1.UpdateCategoryDto.parse(req.body);
            const categoryId = req.params.id;
            if (!categoryId) {
                throw new Error("Category ID is required");
            }
            const category = await this.categoryUseCase.updateCategory(categoryId, updateCategoryRequest);
            res.status(200).json(category);
        }
        catch (error) {
            next(error);
        }
    }
    async deleteCategory(req, res, next) {
        try {
            const categoryId = req.params.id;
            if (!categoryId) {
                throw new Error("Category ID is required");
            }
            const category = await this.categoryUseCase.deleteCategory(categoryId);
            res.status(200).json(category);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.CategoryHttpService = CategoryHttpService;
//# sourceMappingURL=http-service.js.map