import { IStepRepository } from "../../interface";
import { Step } from "../../domain/model/model";
import { CreateStepDto, UpdateStepDto } from "../../domain/model/dto";
import { PrismaClient } from "../../../../generated/prisma";
export declare class StepRepository implements IStepRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    getStepsByRecipeId(recipeId: string): Promise<Step[]>;
    createStep(step: CreateStepDto): Promise<Step>;
    deleteStep(id: string): Promise<Step>;
    getStepById(id: string): Promise<Step | null>;
    updateStep(id: string, step: UpdateStepDto): Promise<Step>;
}
//# sourceMappingURL=index.d.ts.map