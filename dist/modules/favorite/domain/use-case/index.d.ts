import { IFavoriteRepository, IFavoriteUseCase } from "../../interface";
import { CreateFavoriteDto, ResponseFavoriteDto } from "../model/dto";
import { IStatsUseCase } from "../../../stats/interface";
export declare class FavoriteUseCase implements IFavoriteUseCase {
    private favoriteRepository;
    private statsUseCase;
    constructor(favoriteRepository: IFavoriteRepository, statsUseCase: IStatsUseCase);
    createFavorite(favorite: CreateFavoriteDto, userId: string): Promise<ResponseFavoriteDto>;
    deleteFavoriteByRecipeId(recipeId: string, userId: string): Promise<ResponseFavoriteDto>;
    getFavoriteByRecipeId(recipeId: string): Promise<ResponseFavoriteDto[]>;
    getFavoriteByUserId(userId: string): Promise<ResponseFavoriteDto[]>;
}
//# sourceMappingURL=index.d.ts.map