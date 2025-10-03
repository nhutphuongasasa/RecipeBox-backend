"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getUserById(id) {
        return await this.prisma.user.findUnique({ where: { id } });
    }
    async getUserByEmail(email) {
        return await this.prisma.user.findUnique({ where: { email } });
    }
    async createUser(user) {
        return await this.prisma.user.create({ data: user });
    }
    async updateUser(id, user) {
        return await this.prisma.user.update({
            where: { id },
            data: {
                ...(user.name ? { name: user.name } : {}),
                ...(user.email ? { email: user.email } : {}),
                ...(user.password ? { password: user.password } : {}),
            },
        });
    }
    async deleteUser(id) {
        return await this.prisma.user.delete({ where: { id } });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=index.js.map