"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepRepository = void 0;
class StepRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getStepsByRecipeId(recipeId) {
        return await this.prisma.step.findMany({
            where: { recipeId },
            orderBy: { stepTitle: "asc" },
        });
    }
    async createStep(step) {
        return await this.prisma.step.create({
            data: {
                recipeId: step.recipeId,
                stepTitle: step.stepTitle,
                content: step.content,
            },
        });
    }
    async deleteStep(id) {
        return await this.prisma.step.delete({ where: { id } });
    }
    async getStepById(id) {
        return await this.prisma.step.findUnique({ where: { id } });
    }
    async updateStep(id, step) {
        return await this.prisma.step.update({ where: { id }, data: step });
    }
}
exports.StepRepository = StepRepository;
//# sourceMappingURL=index.js.map