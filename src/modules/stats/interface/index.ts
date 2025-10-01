import { Stats } from "../domain/model/stats";
import {
  CreateStatsDto,
  ResponseStatsDto,
  StatsConditionDto,
} from "../domain/model/dto";

export interface IStatsRepository {
  getStateByRecipeId(recipeId: string): Promise<Stats | null>;
  createStats(stats: Stats): Promise<Stats>;
  deleteStats(id: string): Promise<Stats>;
  getStatsById(id: string): Promise<Stats | null>;
  incrementLikes(id: string): Promise<Stats>;
  incrementViews(id: string): Promise<Stats>;
  incrementFavorites(id: string): Promise<Stats>;
  decrementLikes(id: string): Promise<Stats>;
  decrementViews(id: string): Promise<Stats>;
  decrementFavorites(id: string): Promise<Stats>;
  updateRecipeId(id: string, newRecipeId: string): Promise<void>;
  bestRecipe(limit: number, condition: StatsConditionDto): Promise<Stats[]>;
}

export interface IStatsUseCase {
  getStateByRecipeId(recipeId: string): Promise<ResponseStatsDto | null>;
  createStats(stats: CreateStatsDto): Promise<ResponseStatsDto>;
  deleteStats(id: string): Promise<ResponseStatsDto>;
  getStatsById(id: string): Promise<ResponseStatsDto | null>;
  updateLikes(id: string, action: string): Promise<boolean>;
  updateViews(id: string, action: string): Promise<boolean>;
  updateFavoritesByRecipeId(id: string, action: string): Promise<boolean>;
  updateRecipeId(id: string, newRecipeId: string): Promise<void>;
  bestRecipe(
    limit: number,
    condition: StatsConditionDto
  ): Promise<ResponseStatsDto[]>;
}
