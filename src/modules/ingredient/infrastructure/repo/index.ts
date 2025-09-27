import { IIngredientRepository } from "../../interface";
import { CreateIngredientDto } from "../../domain/model/dto";
import { Ingredient } from "../../domain/model/ingredient";
import { UpdateIngredientDto } from "../../domain/model/dto";
import { PrismaClient } from "../../../../generated/prisma";

export class IngredientRepository implements IIngredientRepository {
  constructor(private prisma: PrismaClient) {}

  async getIngredientByName(name: string): Promise<Ingredient | null> {
    const ingredient = await this.prisma.ingredient.findFirst({
      where: { name: name },
      // include: { category: true },
    });

    console.log("ingredient", ingredient);
    return ingredient;
  }

  async createIngredient(ingredient: CreateIngredientDto): Promise<Ingredient> {
    const newIngredient = await this.prisma.ingredient.create({
      data: {
        name: ingredient.name,
        ...(ingredient.categoryId && { categoryId: ingredient.categoryId }),
      },
    });
    return newIngredient;
  }

  async updateIngredient(
    id: string,
    ingredient: UpdateIngredientDto
  ): Promise<Ingredient> {
    const updatedIngredient = await this.prisma.ingredient.update({
      where: { id },
      data: {
        ...(ingredient.name && { name: ingredient.name }),
        ...(ingredient.categoryId && { categoryId: ingredient.categoryId }),
      },
    });
    return updatedIngredient;
  }

  async deleteIngredient(id: string): Promise<Ingredient> {
    const deletedIngredient = await this.prisma.ingredient.delete({
      where: { id },
    });
    return deletedIngredient;
  }

  async getIngredientById(id: string): Promise<Ingredient | null> {
    const ingredient = await this.prisma.ingredient.findUnique({
      where: { id },
    });
    return ingredient;
  }
}
