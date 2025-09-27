import { Step } from "../model/model";
import { CreateStepDto, ResponseStepDto, UpdateStepDto } from "../model/dto";
import { IStepRepository, IStepUseCase } from "../../interface";

export class StepUseCase implements IStepUseCase {
  constructor(private repository: IStepRepository) {}

  async getStepsByRecipeId(recipeId: string): Promise<ResponseStepDto[]> {
    return await this.repository.getStepsByRecipeId(recipeId);
  }

  async createStep(step: CreateStepDto): Promise<ResponseStepDto> {
    return await this.repository.createStep(step);
  }

  async deleteStep(id: string): Promise<ResponseStepDto> {
    return await this.repository.deleteStep(id);
  }

  async getStepById(id: string): Promise<ResponseStepDto | null> {
    return await this.repository.getStepById(id);
  }

  async updateStep(id: string, step: UpdateStepDto): Promise<ResponseStepDto> {
    const existingStep = await this.repository.getStepById(id);

    if (!existingStep) {
      throw new Error("Step not found");
    }

    return await this.repository.updateStep(id, step);
  }
}
