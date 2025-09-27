import { PrismaClient } from "../../../../generated/prisma";
import { Category } from "../../domain/model/category";
import { CreateCategoryDto, UpdateCategoryDto } from "../../domain/model/dto";
import { ICategoryRepository } from "../../interface";

export class CategoryRepository implements ICategoryRepository {
  constructor(private prisma: PrismaClient) {}

  async getAllCategory(): Promise<Category[]> {
    return await this.prisma.category.findMany();
  }

  async getCategoryById(id: string): Promise<Category | null> {
    return await this.prisma.category.findUnique({
      where: {
        id,
      },
    });
  }

  async getCategoryByName(name: string): Promise<Category | null> {
    return await this.prisma.category.findUnique({
      where: {
        name,
      },
    });
  }

  async createCategory(category: CreateCategoryDto): Promise<Category> {
    return await this.prisma.category.create({
      data: {
        name: category.name,
        ...(category.description !== undefined
          ? { description: category.description }
          : {}),
      },
    });
  }

  async updateCategory(
    id: string,
    category: UpdateCategoryDto
  ): Promise<Category> {
    return await this.prisma.category.update({
      where: { id },
      data: {
        ...(category.name !== undefined ? { name: category.name } : {}),
        ...(category.description !== undefined
          ? { description: category.description }
          : {}),
      },
    });
  }

  async deleteCategory(id: string): Promise<Category> {
    return await this.prisma.category.delete({ where: { id } });
  }
}
