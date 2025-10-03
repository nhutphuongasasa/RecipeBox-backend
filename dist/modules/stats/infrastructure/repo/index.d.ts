import { CreateStatsDto, StatsConditionDto } from "../../domain/model/dto";
import { Stats } from "../../domain/model/stats";
import { IStatsRepository } from "../../interface";
import { PrismaClient } from "../../../../generated/prisma";
export declare class StatsRepository implements IStatsRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    updateRecipeId(id: string, newRecipeId: string): Promise<void>;
    getStateByRecipeId(recipeId: string): Promise<Stats | null>;
    createStats(stats: CreateStatsDto): Promise<Stats>;
    deleteStats(id: string): Promise<Stats>;
    getStatsById(id: string): Promise<Stats | null>;
    incrementLikes(id: string): Promise<Stats>;
    incrementViews(id: string): Promise<Stats>;
    incrementFavorites(id: string): Promise<Stats>;
    decrementLikes(id: string): Promise<Stats>;
    decrementViews(id: string): Promise<Stats>;
    decrementFavorites(id: string): Promise<Stats>;
    bestRecipe(limit: number, condition: StatsConditionDto): Promise<Stats[]>;
}
//# sourceMappingURL=index.d.ts.map