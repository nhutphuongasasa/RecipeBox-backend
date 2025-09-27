import { IIngredientRepository, IIngredientUseCase } from "../../interface";
import {
  CreateIngredientDto,
  ResponseIngredientDto,
} from "../../domain/model/dto";
import { UpdateIngredientDto } from "../../domain/model/dto";
import { Ingredient } from "../model/ingredient";

export class IngredientUseCase implements IIngredientUseCase {
  constructor(private repository: IIngredientRepository) {}

  async getIngredientByName(
    name: string
  ): Promise<ResponseIngredientDto | null> {
    const ingredient = await this.repository.getIngredientByName(name);

    if (!ingredient) {
      return null;
    }

    return ResponseIngredientDto.parse(ingredient);
  }

  async createIngredient(ingredient: CreateIngredientDto): Promise<Ingredient> {
    const existingIngredient = await this.repository.getIngredientByName(
      ingredient.name
    );

    if (existingIngredient) {
      throw new Error("Ingredient already exists");
    }

    const newIngredient = await this.repository.createIngredient(ingredient);

    return newIngredient;
  }

  async updateIngredient(
    id: string,
    ingredient: UpdateIngredientDto
  ): Promise<ResponseIngredientDto> {
    const existingIngredient = await this.repository.getIngredientById(id);

    if (!existingIngredient) {
      throw new Error("Ingredient not found");
    }

    if (ingredient.name) {
      const existingIngredientName = await this.repository.getIngredientByName(
        ingredient.name
      );

      if (existingIngredientName) {
        throw new Error("Ingredient name already exists");
      }
    }

    // const updatedIngredient = {
    //   ...ingredient,
    //   id,
    // };

    const updatedIngredient = await this.repository.updateIngredient(
      id,
      ingredient
    );

    console.log(updatedIngredient);

    return ResponseIngredientDto.parse(updatedIngredient);
  }

  async deleteIngredient(id: string): Promise<ResponseIngredientDto> {
    const deletedIngredient = await this.repository.deleteIngredient(id);

    if (!deletedIngredient) {
      throw new Error("Ingredient not found");
    }
    return ResponseIngredientDto.parse(deletedIngredient);
  }

  async getIngredientById(id: string): Promise<ResponseIngredientDto> {
    const ingredient = await this.repository.getIngredientById(id);

    if (!ingredient) {
      throw new Error("Ingredient not found");
    }

    return ResponseIngredientDto.parse(ingredient);
  }
}
