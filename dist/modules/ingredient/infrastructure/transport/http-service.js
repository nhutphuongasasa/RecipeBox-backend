"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientHttpService = void 0;
const dto_1 = require("../../domain/model/dto");
const dto_2 = require("../../domain/model/dto");
class IngredientHttpService {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async getIngredientByName(req, res, next) {
        try {
            const name = req.query.name;
            if (!name) {
                return res.status(400).json({ error: "Invalid ingredient name" });
            }
            const ingredient = await this.useCase.getIngredientByName(name);
            res.status(200).json(ingredient);
        }
        catch (error) {
            next(error);
        }
    }
    async createIngredient(req, res, next) {
        try {
            console.log("req.body", req.body);
            const request = dto_1.CreateIngredientDto.parse(req.body);
            const ingredient = await this.useCase.createIngredient(request);
            res.status(201).json(ingredient);
        }
        catch (error) {
            next(error);
        }
    }
    async updateIngredient(req, res, next) {
        try {
            const request = dto_2.UpdateIngredientDto.parse(req.body);
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ error: "Invalid ingredient ID" });
            }
            const ingredient = await this.useCase.updateIngredient(id, request);
            res.status(200).json(ingredient);
        }
        catch (error) {
            next(error);
        }
    }
    async deleteIngredient(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ error: "Invalid ingredient ID" });
            }
            const ingredient = await this.useCase.deleteIngredient(id);
            res.status(200).json(ingredient);
        }
        catch (error) {
            next(error);
        }
    }
    async getIngredientById(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ error: "Invalid ingredient ID" });
            }
            const ingredient = await this.useCase.getIngredientById(id);
            res.status(200).json(ingredient);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.IngredientHttpService = IngredientHttpService;
//# sourceMappingURL=http-service.js.map