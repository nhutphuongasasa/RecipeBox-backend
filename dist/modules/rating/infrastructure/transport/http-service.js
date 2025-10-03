"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingHttpService = void 0;
const dto_1 = require("../../domain/model/dto");
class RatingHttpService {
    useCase;
    constructor(useCase) {
        this.useCase = useCase;
    }
    async createRating(req, res, next) {
        try {
            const request = dto_1.CreateRatingDto.parse(req.body);
            const rating = await this.useCase.createRating(request);
            res.status(201).json(rating);
        }
        catch (error) {
            next(error);
        }
    }
    async updateRating(req, res, next) {
        try {
            const id = req.params.id;
            const request = dto_1.UpdateRatingDto.parse(req.body);
            if (!id) {
                return res.status(400).json({ error: "Invalid rating ID" });
            }
            const rating = await this.useCase.updateRating(id, request);
            res.status(200).json(rating);
        }
        catch (error) {
            next(error);
        }
    }
    async deleteRating(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ error: "Invalid rating ID" });
            }
            const rating = await this.useCase.deleteRating(id);
            res.status(200).json(rating);
        }
        catch (error) {
            next(error);
        }
    }
    async getRatingById(req, res, next) {
        try {
            const id = req.params.id;
            if (!id) {
                return res.status(400).json({ error: "Invalid rating ID" });
            }
            const rating = await this.useCase.getRatingById(id);
            res.status(200).json(rating);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.RatingHttpService = RatingHttpService;
//# sourceMappingURL=http-service.js.map