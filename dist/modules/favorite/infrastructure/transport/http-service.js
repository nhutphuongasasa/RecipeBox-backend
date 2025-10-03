"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteHttpService = void 0;
class FavoriteHttpService {
    favoriteUseCase;
    constructor(favoriteUseCase) {
        this.favoriteUseCase = favoriteUseCase;
    }
    async createFavorite(req, res, next) {
        try {
            const userId = req.id;
            const favorite = await this.favoriteUseCase.createFavorite(req.body, userId);
            res.status(201).json(favorite);
        }
        catch (error) {
            next(error);
        }
    }
    async deleteFavorite(req, res, next) {
        try {
            const recipeId = req.params.recipeId;
            const userId = req.id;
            if (!recipeId) {
                return res.status(400).json({
                    message: "Invalid recipeId",
                });
            }
            const favorite = await this.favoriteUseCase.deleteFavoriteByRecipeId(recipeId, userId);
            res.status(200).json(favorite);
        }
        catch (error) {
            next(error);
        }
    }
    async getFavoriteByRecipeId(req, res, next) {
        try {
            const recipeId = req.params.recipeId;
            if (!recipeId) {
                return res.status(400).json({
                    message: "Invalid recipeId",
                });
            }
            const favorite = await this.favoriteUseCase.getFavoriteByRecipeId(recipeId);
            res.status(200).json(favorite);
        }
        catch (error) {
            next(error);
        }
    }
    async getFavoriteByUserId(req, res, next) {
        try {
            const userId = req.params.userId;
            if (!userId) {
                return res.status(400).json({
                    message: "Invalid userId",
                });
            }
            const favorite = await this.favoriteUseCase.getFavoriteByUserId(userId);
            res.status(200).json(favorite);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.FavoriteHttpService = FavoriteHttpService;
//# sourceMappingURL=http-service.js.map