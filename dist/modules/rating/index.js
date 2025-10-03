"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratingUseCase = exports.setupRatingRoutes = void 0;
const prisma_1 = require("../../generated/prisma");
const http_service_1 = require("./infrastructure/transport/http-service");
const repo_1 = require("./infrastructure/repo");
const use_case_1 = require("./domain/use-case");
const express_1 = __importDefault(require("express"));
const setupRatingRoutes = () => {
    const prisma = new prisma_1.PrismaClient();
    const repository = new repo_1.RatingRepository(prisma);
    const useCase = new use_case_1.RatingUseCase(repository);
    const httpService = new http_service_1.RatingHttpService(useCase);
    const router = express_1.default.Router();
    router.post("/", httpService.createRating);
    router.put("/:id", httpService.updateRating);
    router.delete("/:id", httpService.deleteRating);
    router.get("/:id", httpService.getRatingById);
    return router;
};
exports.setupRatingRoutes = setupRatingRoutes;
const ratingUseCase = () => {
    const prisma = new prisma_1.PrismaClient();
    const repository = new repo_1.RatingRepository(prisma);
    const useCase = new use_case_1.RatingUseCase(repository);
    return useCase;
};
exports.ratingUseCase = ratingUseCase;
//# sourceMappingURL=index.js.map