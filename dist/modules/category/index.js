"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryUseCase = exports.setupCategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const http_service_1 = require("./infrastructure/transport/http-service");
const repo_1 = require("./infrastructure/repo");
const use_case_1 = require("./domain/use-case");
const prisma_1 = require("../../generated/prisma");
const setupCategoryRoutes = () => {
    const prisma = new prisma_1.PrismaClient();
    const repository = new repo_1.CategoryRepository(prisma);
    const useCase = new use_case_1.CategoryUseCase(repository);
    const httpService = new http_service_1.CategoryHttpService(useCase);
    const router = express_1.default.Router();
    router.get("/", httpService.getAllCategory.bind(httpService));
    router.get("/id/:id", httpService.getCategoryById.bind(httpService));
    router.get("/name/:name", httpService.getCategoryByName.bind(httpService));
    router.post("/", httpService.createCategory.bind(httpService));
    router.put("/:id", httpService.updateCategory.bind(httpService));
    router.delete("/:id", httpService.deleteCategory.bind(httpService));
    return router;
};
exports.setupCategoryRoutes = setupCategoryRoutes;
const categoryUseCase = () => {
    const prisma = new prisma_1.PrismaClient();
    const repository = new repo_1.CategoryRepository(prisma);
    const useCase = new use_case_1.CategoryUseCase(repository);
    return useCase;
};
exports.categoryUseCase = categoryUseCase;
//# sourceMappingURL=index.js.map