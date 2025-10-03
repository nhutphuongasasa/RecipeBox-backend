"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepUseCase = void 0;
class StepUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async getStepsByRecipeId(recipeId) {
        return await this.repository.getStepsByRecipeId(recipeId);
    }
    async createStep(step) {
        return await this.repository.createStep(step);
    }
    async deleteStep(id) {
        return await this.repository.deleteStep(id);
    }
    async getStepById(id) {
        return await this.repository.getStepById(id);
    }
    async updateStep(id, step) {
        const existingStep = await this.repository.getStepById(id);
        if (!existingStep) {
            throw new Error("Step not found");
        }
        return await this.repository.updateStep(id, step);
    }
}
exports.StepUseCase = StepUseCase;
//# sourceMappingURL=index.js.map