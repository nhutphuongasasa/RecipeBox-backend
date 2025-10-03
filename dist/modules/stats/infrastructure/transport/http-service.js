"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsHttpService = void 0;
const dto_1 = require("../../domain/model/dto");
class StatsHttpService {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async createStats(req, res, next) {
        try {
            console.log(req.body);
            const request = dto_1.CreateStatsDto.parse(req.body);
            const stats = await this.useCase.createStats(request);
            res.status(201).json(stats);
        }
        catch (error) {
            next(error);
        }
    }
    async deleteStats(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ error: "Invalid stats ID" });
            }
            const stats = await this.useCase.deleteStats(id);
            res.status(200).json(stats);
        }
        catch (error) {
            next(error);
        }
    }
    async getStatsById(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ error: "Invalid stats ID" });
            }
            const stats = await this.useCase.getStatsById(id);
            res.status(200).json(stats);
        }
        catch (error) {
            next(error);
        }
    }
    async updateLikes(req, res, next) {
        try {
            const id = req.params.id;
            const action = req.body.action;
            if (!id) {
                return res.status(400).json({ error: "Invalid stats ID" });
            }
            const stats = await this.useCase.updateLikes(id, action);
            res.status(200).json(stats);
        }
        catch (error) {
            next(error);
        }
    }
    async updateViews(req, res, next) {
        try {
            const id = req.params.id;
            const action = req.body.action;
            if (!id) {
                return res.status(400).json({ error: "Invalid stats ID" });
            }
            const stats = await this.useCase.updateViews(id, action);
            res.status(200).json(stats);
        }
        catch (error) {
            next(error);
        }
    }
    async getStateByRecipeId(req, res, next) {
        try {
            const recipeId = req.params.recipeId;
            if (!recipeId) {
                return res.status(400).json({ error: "Invalid recipe ID" });
            }
            const stats = await this.useCase.getStateByRecipeId(recipeId);
            res.status(200).json(stats);
        }
        catch (error) {
            next(error);
        }
    }
    async updateFavorites(req, res, next) {
        try {
            const id = req.params.id;
            const action = req.body.action;
            if (!id) {
                return res.status(400).json({ error: "Invalid stats ID" });
            }
            const stats = await this.useCase.updateFavoritesByRecipeId(id, action);
            res.status(200).json(stats);
        }
        catch (error) {
            next(error);
        }
    }
    async bestRecipe(req, res, next) {
        try {
            const limit = parseInt(req.query.limit);
            const condition = dto_1.StatsConditionDto.parse(req.body);
            const stats = await this.useCase.bestRecipe(limit, condition);
            res.status(200).json(stats);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.StatsHttpService = StatsHttpService;
//# sourceMappingURL=http-service.js.map