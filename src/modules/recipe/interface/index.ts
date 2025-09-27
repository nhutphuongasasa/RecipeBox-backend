import { CommentEntity } from "../../comment/domain/model/comment";
import {
  CreateRecipeDto,
  ResponseRecipeDto,
  UpdateRecipeDto,
} from "../domian/model/dto";
import { Recipe } from "../domian/model/recipe";

export interface IRecipeUseCase {
  getRecipeByName(
    name: string
  ): Promise<{ recipes: ResponseRecipeDto[]; totalCount: number }>;
  createRecipe(
    recipe: CreateRecipeDto,
    userId: string
  ): Promise<ResponseRecipeDto>;
  updateRecipe(
    id: string,
    recipe: UpdateRecipeDto,
    userId: string
  ): Promise<ResponseRecipeDto>;
  deleteRecipe(id: string): Promise<ResponseRecipeDto>;
  getRecipeById(id: string): Promise<ResponseRecipeDto>;
  filterbyCategory(
    category: string,
    page: number,
    limit: number
  ): Promise<{ recipes: ResponseRecipeDto[]; totalCount: number }>;
  filterbyIngredient(
    ingredient: string,
    page: number,
    limit: number
  ): Promise<{ recipes: ResponseRecipeDto[]; totalCount: number }>;
  getAllRecipe(
    page: number,
    limit: number
  ): Promise<{ recipes: ResponseRecipeDto[]; totalCount: number } | null>;
}

export interface IRecipeRepository {
  getAllRecipe(
    page: number,
    limit: number
  ): Promise<{ recipes: Recipe[]; totalCount: number } | null>;
  getRecipeByName(name: string): Promise<Recipe | null>;
  getRecipeById(id: string): Promise<Recipe | null>;
  createRecipe(recipe: CreateRecipeDto, userId: string): Promise<Recipe>;
  updateRecipe(
    id: string,
    recipe: UpdateRecipeDto,
    userId: string
  ): Promise<Recipe>;
  deleteRecipe(id: string): Promise<Recipe>;
  filterbyCategory(
    category: string,
    page: number,
    limit: number
  ): Promise<{ recipes: Recipe[]; totalCount: number }>;
  filterbyIngredient(
    ingredient: string,
    page: number,
    limit: number
  ): Promise<{ recipes: Recipe[]; totalCount: number }>;
}
