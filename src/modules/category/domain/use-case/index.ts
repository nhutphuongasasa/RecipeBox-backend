import { ICategoryRepository, ICategoryUseCase } from "../../interface";
import {
  CreateCategoryDto,
  ResponseCategoryDto,
  UpdateCategoryDto,
} from "../model/dto";

export class CategoryUseCase implements ICategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async getAllCategory(): Promise<ResponseCategoryDto[]> {
    const categories = await this.categoryRepository.getAllCategory();
    const result = categories.map((category) =>
      ResponseCategoryDto.parse(category)
    );
    return result;
  }

  async getCategoryById(id: string): Promise<ResponseCategoryDto | null> {
    return ResponseCategoryDto.parse(
      await this.categoryRepository.getCategoryById(id)
    );
  }

  async getCategoryByName(name: string): Promise<ResponseCategoryDto | null> {
    const category = await this.categoryRepository.getCategoryByName(name);

    if (!category) {
      return null;
    }

    return ResponseCategoryDto.parse(category);
  }

  async createCategory(
    category: CreateCategoryDto
  ): Promise<ResponseCategoryDto> {
    const existingCategory = await this.categoryRepository.getCategoryByName(
      category.name
    );
    if (existingCategory) {
      throw new Error("Category already exists");
    }
    return ResponseCategoryDto.parse(
      await this.categoryRepository.createCategory(category)
    );
  }

  async updateCategory(
    id: string,
    category: UpdateCategoryDto
  ): Promise<ResponseCategoryDto> {
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

    return ResponseCategoryDto.parse(
      await this.categoryRepository.updateCategory(id, updatedCategory)
    );
  }

  async deleteCategory(id: string): Promise<ResponseCategoryDto> {
    return ResponseCategoryDto.parse(
      await this.categoryRepository.deleteCategory(id)
    );
  }
}
