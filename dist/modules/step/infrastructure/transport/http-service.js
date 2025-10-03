"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepHttpService = void 0;
const dto_1 = require("../../domain/model/dto");
class StepHttpService {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async getStepsByRecipeId(req, res, next) {
        try {
            const recipeId = req.params.recipeId;
            if (!recipeId) {
                return res.status(400).json({ error: "Recipe ID is required" });
            }
            const steps = await this.useCase.getStepsByRecipeId(recipeId);
            return res.json(steps);
        }
        catch (error) {
            next(error);
        }
    }
    async createStep(req, res, next) {
        try {
            const request = dto_1.CreateStepDto.parse(req.body);
            const step = await this.useCase.createStep(request);
            return res.json(step);
        }
        catch (error) {
            next(error);
        }
    }
    async deleteStep(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ error: "ID is required" });
            }
            const step = await this.useCase.deleteStep(id);
            return res.json(step);
        }
        catch (error) {
            next(error);
        }
    }
    async updateStep(req, res, next) {
        try {
            const id = req.params.id;
            const request = dto_1.UpdateStepDto.parse(req.body);
            if (!id) {
                return res.status(400).json({ error: "ID is required" });
            }
            const step = await this.useCase.updateStep(id, request);
            return res.json(step);
        }
        catch (error) {
            next(error);
        }
    }
    async getStepById(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ error: "ID is required" });
            }
            const step = await this.useCase.getStepById(id);
            return res.json(step);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.StepHttpService = StepHttpService;
//# sourceMappingURL=http-service.js.map