"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoriteUseCase = exports.setupFavoriteRoutes = void 0;
const http_service_1 = require("./infrastructure/transport/http-service");
const repo_1 = require("./infrastructure/repo");
const use_case_1 = require("./domain/use-case");
const prisma_1 = require("../../generated/prisma");
const express_1 = __importDefault(require("express"));
const stats_1 = require("../stats");
const validate_1 = require("../../middleware/jwt/validate");
const setupFavoriteRoutes = () => {
    const prisma = new prisma_1.PrismaClient();
    const repository = new repo_1.FavoriteRepository(prisma);
    const tmpStatsUseCase = (0, stats_1.statsUseCase)();
    const useCase = new use_case_1.FavoriteUseCase(repository, tmpStatsUseCase);
    const httpService = new http_service_1.FavoriteHttpService(useCase);
    const router = express_1.default.Router();
    router.post("/", validate_1.validateToken, httpService.createFavorite.bind(httpService));
    router.delete("/:recipeId", validate_1.validateToken, httpService.deleteFavorite.bind(httpService));
    router.get("/user/:userId", validate_1.validateToken, httpService.getFavoriteByUserId.bind(httpService));
    router.get("/recipe/:recipeId", httpService.getFavoriteByRecipeId.bind(httpService));
    return router;
};
exports.setupFavoriteRoutes = setupFavoriteRoutes;
const favoriteUseCase = () => {
    const prisma = new prisma_1.PrismaClient();
    const repository = new repo_1.FavoriteRepository(prisma);
    const testStatsUseCase = (0, stats_1.statsUseCase)();
    const useCase = new use_case_1.FavoriteUseCase(repository, testStatsUseCase);
    return useCase;
};
exports.favoriteUseCase = favoriteUseCase;
//# sourceMappingURL=index.js.map