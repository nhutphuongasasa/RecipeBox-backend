"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stepUseCase = exports.setupStepRoutes = void 0;
const express_1 = __importDefault(require("express"));
const http_service_1 = require("./infrastructure/transport/http-service");
const repo_1 = require("./infrastructure/repo");
const use_case_1 = require("./domain/use-case");
const prisma_1 = require("../../generated/prisma");
const setupStepRoutes = () => {
    const prisma = new prisma_1.PrismaClient();
    const repository = new repo_1.StepRepository(prisma);
    const useCase = new use_case_1.StepUseCase(repository);
    const httpService = new http_service_1.StepHttpService(useCase);
    const router = express_1.default.Router();
    router.post("/", httpService.createStep.bind(httpService));
    router.delete("/:id", httpService.deleteStep.bind(httpService));
    router.get("/:id", httpService.getStepById.bind(httpService));
    router.put("/:id", httpService.updateStep.bind(httpService));
    router.get("/recipe/:recipeId", httpService.getStepsByRecipeId.bind(httpService));
    return router;
};
exports.setupStepRoutes = setupStepRoutes;
const stepUseCase = () => {
    const prisma = new prisma_1.PrismaClient();
    const repository = new repo_1.StepRepository(prisma);
    const useCase = new use_case_1.StepUseCase(repository);
    return useCase;
};
exports.stepUseCase = stepUseCase;
//# sourceMappingURL=index.js.map