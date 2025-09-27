import { Stats } from "../model/stats";
import { ResponseStatsDto, StatsConditionDto } from "../model/dto";
import { IStatsRepository, IStatsUseCase } from "../../interface";

export class StatsUseCase implements IStatsUseCase {
  constructor(private repository: IStatsRepository) {}

  async createStats(stats: Stats): Promise<ResponseStatsDto> {
    return ResponseStatsDto.parse(await this.repository.createStats(stats));
  }

  async deleteStats(id: string): Promise<ResponseStatsDto> {
    return ResponseStatsDto.parse(await this.repository.deleteStats(id));
  }

  async getStatsById(id: string): Promise<ResponseStatsDto> {
    return ResponseStatsDto.parse(await this.repository.getStatsById(id));
  }

  async getStateByRecipeId(recipeId: string): Promise<ResponseStatsDto | null> {
    const existingStats = await this.repository.getStateByRecipeId(recipeId);

    if (!existingStats) {
      return null;
    }

    return ResponseStatsDto.parse(existingStats);
  }

  async updateLikes(id: string, action: string): Promise<boolean> {
    const existingStats = await this.repository.getStatsById(id);

    if (!existingStats) {
      throw new Error("Stats not found");
    }

    if (action === "increment") {
      await this.repository.incrementLikes(id);

      return true;
    } else if (action === "decrement") {
      await this.repository.decrementLikes(id);

      return true;
    }

    return false;
  }

  async updateViews(id: string, action: string): Promise<boolean> {
    const existingStats = await this.repository.getStatsById(id);

    if (!existingStats) {
      throw new Error("Stats not found");
    }

    if (action === "increment") {
      await this.repository.incrementViews(id);

      return true;
    } else if (action === "decrement") {
      await this.repository.decrementViews(id);

      return true;
    }

    return false;
  }

  async updateFavorites(id: string, action: string): Promise<boolean> {
    const existingStats = await this.repository.getStatsById(id);

    if (!existingStats) {
      throw new Error("Stats not found");
    }

    if (action === "increment") {
      await this.repository.incrementFavorites(id);

      return true;
    } else if (action === "decrement") {
      await this.repository.decrementFavorites(id);

      return true;
    }

    return false;
  }

  async bestRecipe(
    limit: number,
    condition: StatsConditionDto
  ): Promise<ResponseStatsDto[]> {
    const result = await this.repository.bestRecipe(limit, condition);

    return result.map((item) => ResponseStatsDto.parse(item));
  }
}
