import { CreateIngredientDto } from "../domain/model/dto";
import { ResponseIngredientDto } from "../domain/model/dto";
import { UpdateIngredientDto } from "../domain/model/dto";
import { Ingredient } from "../domain/model/ingredient";

export interface IIngredientUseCase {
  getIngredientByName(name: string): Promise<Ingredient | null>;
  createIngredient(ingredient: CreateIngredientDto): Promise<Ingredient>;
  updateIngredient(
    id: string,
    ingredient: UpdateIngredientDto
  ): Promise<ResponseIngredientDto>;
  deleteIngredient(id: string): Promise<ResponseIngredientDto>;
  getIngredientById(id: string): Promise<ResponseIngredientDto>;
}

export interface IIngredientRepository {
  getIngredientByName(name: string): Promise<Ingredient | null>;
  createIngredient(ingredient: CreateIngredientDto): Promise<Ingredient>;
  updateIngredient(
    id: string,
    ingredient: UpdateIngredientDto
  ): Promise<Ingredient>;
  deleteIngredient(id: string): Promise<Ingredient>;
  getIngredientById(id: string): Promise<Ingredient | null>;
}
