"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUseCase = void 0;
const generateToken_1 = require("../../../../middleware/jwt/generateToken");
const dto_1 = require("../model/dto");
class UserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async registerUser(registerRequest) {
        const newUser = {
            name: registerRequest.name,
            email: registerRequest.email,
            password: registerRequest.password,
        };
        return dto_1.ResponseUserDto.parse(await this.userRepository.createUser(newUser));
    }
    async loginUser(loginRequest) {
        const user = await this.userRepository.getUserByEmail(loginRequest.email);
        if (!user) {
            throw new Error("User not found");
        }
        if (user.password !== loginRequest.password) {
            throw new Error("Invalid password");
        }
        const token = (0, generateToken_1.generateToken)({
            id: user.id,
            email: user.email,
        });
        return dto_1.ResponseUserDto.parse({ ...user, token });
    }
    async getUserById(id) {
        return dto_1.ResponseUserDto.parse(await this.userRepository.getUserById(id));
    }
    async getUserByEmail(email) {
        return dto_1.ResponseUserDto.parse(await this.userRepository.getUserByEmail(email));
    }
    async createUser(user) {
        const existingUser = await this.userRepository.getUserByEmail(user.email);
        if (existingUser) {
            throw new Error("User already exists");
        }
        return dto_1.ResponseUserDto.parse(await this.userRepository.createUser(user));
    }
    async updateUser(id, user) {
        const existingUser = await this.userRepository.getUserById(id);
        if (!existingUser) {
            throw new Error("User not found");
        }
        const updatedUser = {
            name: user.name ? user.name : existingUser.name,
            email: user.email ? user.email : existingUser.email,
            password: user.password ? user.password : existingUser.password,
            comments: existingUser.comments,
            ratings: existingUser.ratings,
            favorites: existingUser.favorites,
        };
        return dto_1.ResponseUserDto.parse(await this.userRepository.updateUser(id, updatedUser));
    }
    async deleteUser(id) {
        return await this.userRepository.deleteUser(id);
    }
}
exports.UserUseCase = UserUseCase;
//# sourceMappingURL=index.js.map