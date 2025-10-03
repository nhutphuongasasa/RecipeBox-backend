import { CreateStepDto, ResponseStepDto, UpdateStepDto } from "../model/dto";
import { IStepRepository, IStepUseCase } from "../../interface";
export declare class StepUseCase implements IStepUseCase {
    private repository;
    constructor(repository: IStepRepository);
    getStepsByRecipeId(recipeId: string): Promise<ResponseStepDto[]>;
    createStep(step: CreateStepDto): Promise<ResponseStepDto>;
    deleteStep(id: string): Promise<ResponseStepDto>;
    getStepById(id: string): Promise<ResponseStepDto | null>;
    updateStep(id: string, step: UpdateStepDto): Promise<ResponseStepDto>;
}
//# sourceMappingURL=index.d.ts.map