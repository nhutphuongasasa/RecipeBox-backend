import { Stats } from "../model/stats";
import { ResponseStatsDto, StatsConditionDto } from "../model/dto";
import { IStatsRepository, IStatsUseCase } from "../../interface";
export declare class StatsUseCase implements IStatsUseCase {
    private repository;
    constructor(repository: IStatsRepository);
    createStats(stats: Stats): Promise<ResponseStatsDto>;
    deleteStats(id: string): Promise<ResponseStatsDto>;
    getStatsById(id: string): Promise<ResponseStatsDto | null>;
    getStateByRecipeId(recipeId: string): Promise<ResponseStatsDto | null>;
    updateLikes(id: string, action: string): Promise<boolean>;
    updateViews(id: string, action: string): Promise<boolean>;
    updateRecipeId(id: string, newRecipeId: string): Promise<void>;
    updateFavoritesByRecipeId(id: string, action: string): Promise<boolean>;
    bestRecipe(limit: number, condition: StatsConditionDto): Promise<ResponseStatsDto[]>;
}
//# sourceMappingURL=index.d.ts.map