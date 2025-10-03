"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUseCase = void 0;
const dto_1 = require("../model/dto");
class CategoryUseCase {
    categoryRepository;
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async getAllCategory() {
        const categories = await this.categoryRepository.getAllCategory();
        const result = categories.map((category) => dto_1.ResponseCategoryDto.parse(category));
        return result;
    }
    async getCategoryById(id) {
        return dto_1.ResponseCategoryDto.parse(await this.categoryRepository.getCategoryById(id));
    }
    async getCategoryByName(name) {
        const category = await this.categoryRepository.getCategoryByName(name);
        if (!category) {
            return null;
        }
        return dto_1.ResponseCategoryDto.parse(category);
    }
    async createCategory(category) {
        const existingCategory = await this.categoryRepository.getCategoryByName(category.name);
        if (existingCategory) {
            throw new Error("Category already exists");
        }
        return dto_1.ResponseCategoryDto.parse(await this.categoryRepository.createCategory(category));
    }
    async updateCategory(id, category) {
        const existingCategory = await this.categoryRepository.getCategoryById(id);
        console.log(existingCategory);
        if (!existingCategory) {
            throw new Error("Category not found");
        }
        const updatedCategory = {
            name: category.name ? category.name : existingCategory.name,
            description: category.description
                ? category.description
                : existingCategory.description,
        };
        console.log(updatedCategory);
        return dto_1.ResponseCategoryDto.parse(await this.categoryRepository.updateCategory(id, updatedCategory));
    }
    async deleteCategory(id) {
        return dto_1.ResponseCategoryDto.parse(await this.categoryRepository.deleteCategory(id));
    }
}
exports.CategoryUseCase = CategoryUseCase;
//# sourceMappingURL=index.js.map