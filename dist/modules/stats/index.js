"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statsUseCase = exports.setupStatsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const http_service_1 = require("./infrastructure/transport/http-service");
const repo_1 = require("./infrastructure/repo");
const use_case_1 = require("./domain/use-case");
const prisma_1 = require("../../generated/prisma");
const setupStatsRoutes = () => {
    const prisma = new prisma_1.PrismaClient();
    const repository = new repo_1.StatsRepository(prisma);
    const useCase = new use_case_1.StatsUseCase(repository);
    const httpService = new http_service_1.StatsHttpService(useCase);
    const router = express_1.default.Router();
    router.post("/", httpService.createStats.bind(httpService));
    router.get("/recipeId/:recipeId", httpService.getStateByRecipeId.bind(httpService));
    router.get("/:id", httpService.getStatsById.bind(httpService));
    router.get("/best", httpService.bestRecipe.bind(httpService));
    router.put("/like/:id", httpService.updateLikes.bind(httpService));
    router.put("/view/:id", httpService.updateViews.bind(httpService));
    router.put("/favorite/:id", httpService.updateFavorites.bind(httpService));
    router.delete("/:id", httpService.deleteStats.bind(httpService));
    return router;
};
exports.setupStatsRoutes = setupStatsRoutes;
const statsUseCase = () => {
    const prisma = new prisma_1.PrismaClient();
    const repository = new repo_1.StatsRepository(prisma);
    const useCase = new use_case_1.StatsUseCase(repository);
    return useCase;
};
exports.statsUseCase = statsUseCase;
//# sourceMappingURL=index.js.map