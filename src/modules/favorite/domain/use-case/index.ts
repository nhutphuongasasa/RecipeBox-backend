import { IFavoriteRepository, IFavoriteUseCase } from "../../interface";
import { Favorite } from "../model/favorite";
import { CreateFavoriteDto, ResponseFavoriteDto } from "../model/dto";
import { IStatsUseCase } from "../../../stats/interface";

export class FavoriteUseCase implements IFavoriteUseCase {
  constructor(
    private favoriteRepository: IFavoriteRepository,
    private statsUseCase: IStatsUseCase
  ) {}

  async createFavorite(
    favorite: CreateFavoriteDto,
    userId: string
  ): Promise<ResponseFavoriteDto> {
    const result = ResponseFavoriteDto.parse(
      await this.favoriteRepository.createFavorite(favorite, userId)
    );

    const existingStats = await this.statsUseCase.getStatsById(
      favorite.recipeId
    );

    if (!existingStats) {
      await this.statsUseCase.createStats({
        recipeId: favorite.recipeId,
      });
    }

    await this.statsUseCase.updateFavorites(favorite.recipeId, "increment");

    return result;
  }

  async deleteFavorite(id: string): Promise<ResponseFavoriteDto> {
    return ResponseFavoriteDto.parse(
      await this.favoriteRepository.deleteFavorite(id)
    );
  }

  async getFavoriteByRecipeId(
    recipeId: string
  ): Promise<ResponseFavoriteDto[]> {
    const favoriteList = await this.favoriteRepository.getFavoriteByRecipeId(
      recipeId
    );

    return favoriteList.map((favorite) => ResponseFavoriteDto.parse(favorite));
  }

  async getFavoriteByUserId(userId: string): Promise<ResponseFavoriteDto[]> {
    const favoriteList = await this.favoriteRepository.getFavoriteByUserId(
      userId
    );

    return favoriteList.map((favorite) => ResponseFavoriteDto.parse(favorite));
  }
}
