"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userUseCase = exports.setupUserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const repo_1 = require("./infrastructure/repo");
const use_case_1 = require("./domain/use-case");
const http_service_1 = require("./infrastructure/transport/http-service");
const prisma_1 = require("../../generated/prisma");
const validate_1 = require("../../middleware/jwt/validate");
const setupUserRoutes = () => {
    const prisma = new prisma_1.PrismaClient();
    const repository = new repo_1.UserRepository(prisma);
    const useCase = new use_case_1.UserUseCase(repository);
    const httpService = new http_service_1.UserHttpService(useCase);
    const router = express_1.default.Router();
    router.post("/register", httpService.registerUser.bind(httpService));
    router.post("/login", httpService.loginUser.bind(httpService));
    router.get("/:id", httpService.getUserById.bind(httpService));
    router.post("/", httpService.createUser.bind(httpService));
    router.put("/", validate_1.validateToken, httpService.updateUser.bind(httpService));
    router.delete("/:id", httpService.deleteUser.bind(httpService));
    router.get("/email/:email", httpService.getUserByEmail.bind(httpService));
    return router;
};
exports.setupUserRoutes = setupUserRoutes;
const userUseCase = () => {
    const prisma = new prisma_1.PrismaClient();
    const repository = new repo_1.UserRepository(prisma);
    const useCase = new use_case_1.UserUseCase(repository);
    return useCase;
};
exports.userUseCase = userUseCase;
//# sourceMappingURL=index.js.map