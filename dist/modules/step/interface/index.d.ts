import { Step } from "../domain/model/model";
import { CreateStepDto, UpdateStepDto } from "../domain/model/dto";
import { ResponseStepDto } from "../domain/model/dto";
export interface IStepRepository {
    createStep(step: CreateStepDto): Promise<Step>;
    deleteStep(id: string): Promise<Step>;
    getStepById(id: string): Promise<Step | null>;
    updateStep(id: string, step: UpdateStepDto): Promise<Step>;
    getStepsByRecipeId(recipeId: string): Promise<Step[]>;
}
export interface IStepUseCase {
    createStep(step: CreateStepDto): Promise<ResponseStepDto>;
    deleteStep(id: string): Promise<ResponseStepDto>;
    getStepById(id: string): Promise<ResponseStepDto | null>;
    updateStep(id: string, step: UpdateStepDto): Promise<ResponseStepDto>;
    getStepsByRecipeId(recipeId: string): Promise<ResponseStepDto[]>;
}
//# sourceMappingURL=index.d.ts.map