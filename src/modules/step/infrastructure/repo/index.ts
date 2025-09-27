import { IStepRepository } from "../../interface";
import { Step } from "../../domain/model/model";
import { CreateStepDto, UpdateStepDto } from "../../domain/model/dto";
import { PrismaClient } from "../../../../generated/prisma";

export class StepRepository implements IStepRepository {
  constructor(private prisma: PrismaClient) {}

  async getStepsByRecipeId(recipeId: string): Promise<Step[]> {
    return await this.prisma.step.findMany({
      where: { recipeId },
      orderBy: { stepTitle: "asc" },
    });
  }

  async createStep(step: CreateStepDto): Promise<Step> {
    return await this.prisma.step.create({
      data: {
        recipeId: step.recipeId,
        stepTitle: step.stepTitle,
        content: step.content,
      },
    });
  }

  async deleteStep(id: string): Promise<Step> {
    return await this.prisma.step.delete({ where: { id } });
  }

  async getStepById(id: string): Promise<Step | null> {
    return await this.prisma.step.findUnique({ where: { id } });
  }

  async updateStep(id: string, step: UpdateStepDto): Promise<Step> {
    return await this.prisma.step.update({ where: { id }, data: step });
  }
}
