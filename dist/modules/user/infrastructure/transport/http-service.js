"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHttpService = void 0;
const dto_1 = require("../../domain/model/dto");
class UserHttpService {
    userUseCase;
    constructor(userUseCase) {
        this.userUseCase = userUseCase;
    }
    async registerUser(req, res, next) {
        try {
            const registerRequest = dto_1.RegisterUserDto.parse(req.body);
            const user = await this.userUseCase.registerUser(registerRequest);
            res.status(201).json(user);
        }
        catch (error) {
            next(error);
        }
    }
    async loginUser(req, res, next) {
        try {
            const loginRequest = dto_1.LoginUserDto.parse(req.body);
            const user = await this.userUseCase.loginUser(loginRequest);
            res.status(200).json(user);
        }
        catch (error) {
            next(error);
        }
    }
    async getUserById(req, res, next) {
        try {
            const userId = req.params.id;
            if (!userId) {
                throw new Error("User ID is required");
            }
            const user = await this.userUseCase.getUserById(userId);
            res.status(200).json(user);
        }
        catch (error) {
            next(error);
        }
    }
    async createUser(req, res, next) {
        try {
            const createUserRequest = dto_1.CreateUserDto.parse(req.body);
            const user = await this.userUseCase.createUser(createUserRequest);
            res.status(201).json(user);
        }
        catch (error) {
            next(error);
        }
    }
    async updateUser(req, res, next) {
        try {
            console.log(req.id);
            const userId = req.id;
            if (!userId) {
                throw new Error("User ID is required");
            }
            const updateUserRequest = dto_1.UpdateUserDto.parse(req.body);
            const user = await this.userUseCase.updateUser(userId, updateUserRequest);
            res.status(200).json(user);
        }
        catch (error) {
            next(error);
        }
    }
    async deleteUser(req, res, next) {
        try {
            const userId = req.params.id;
            if (!userId) {
                throw new Error("User ID is required");
            }
            const user = await this.userUseCase.deleteUser(userId);
            res.status(200).json(user);
        }
        catch (error) {
            next(error);
        }
    }
    async getUserByEmail(req, res, next) {
        try {
            const email = req.params.email;
            if (!email) {
                throw new Error("Email is required");
            }
            const user = await this.userUseCase.getUserByEmail(email);
            res.status(200).json(user);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.UserHttpService = UserHttpService;
//# sourceMappingURL=http-service.js.map