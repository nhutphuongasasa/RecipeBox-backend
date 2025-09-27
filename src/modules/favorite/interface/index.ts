import { CreateFavoriteDto, ResponseFavoriteDto } from "../domain/model/dto";
import { Favorite } from "../domain/model/favorite";

export interface IFavoriteUseCase {
  createFavorite(
    favorite: CreateFavoriteDto,
    userId: string
  ): Promise<ResponseFavoriteDto>;
  deleteFavorite(id: string): Promise<Favorite>;
  getFavoriteByRecipeId(recipeId: string): Promise<ResponseFavoriteDto[]>;
  getFavoriteByUserId(userId: string): Promise<ResponseFavoriteDto[]>;
}

export interface IFavoriteRepository {
  createFavorite(
    favorite: CreateFavoriteDto,
    userId: string
  ): Promise<Favorite>;
  deleteFavorite(id: string): Promise<Favorite>;
  getFavoriteByRecipeId(recipeId: string): Promise<Favorite[]>;
  getFavoriteByUserId(userId: string): Promise<Favorite[]>;
}
