"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingredientUseCase = exports.setupIngredientRoutes = void 0;
const prisma_1 = require("../../generated/prisma");
const http_service_1 = require("./infrastructure/transport/http-service");
const repo_1 = require("./infrastructure/repo");
const use_case_1 = require("./domain/use-case");
const express_1 = __importDefault(require("express"));
const setupIngredientRoutes = () => {
    const prisma = new prisma_1.PrismaClient();
    const repository = new repo_1.IngredientRepository(prisma);
    const useCase = new use_case_1.IngredientUseCase(repository);
    const httpService = new http_service_1.IngredientHttpService(useCase);
    const router = express_1.default.Router();
    router.get("/", httpService.getIngredientByName.bind(httpService));
    router.get("/:id", httpService.getIngredientById.bind(httpService));
    router.post("/", httpService.createIngredient.bind(httpService));
    router.put("/:id", httpService.updateIngredient.bind(httpService));
    router.delete("/:id", httpService.deleteIngredient.bind(httpService));
    return router;
};
exports.setupIngredientRoutes = setupIngredientRoutes;
const ingredientUseCase = () => {
    const prisma = new prisma_1.PrismaClient();
    const repository = new repo_1.IngredientRepository(prisma);
    const useCase = new use_case_1.IngredientUseCase(repository);
    return useCase;
};
exports.ingredientUseCase = ingredientUseCase;
//# sourceMappingURL=index.js.map