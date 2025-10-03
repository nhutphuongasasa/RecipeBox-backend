"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
class CategoryRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllCategory() {
        return await this.prisma.category.findMany();
    }
    async getCategoryById(id) {
        return await this.prisma.category.findUnique({
            where: {
                id,
            },
        });
    }
    async getCategoryByName(name) {
        return await this.prisma.category.findUnique({
            where: {
                name,
            },
        });
    }
    async createCategory(category) {
        return await this.prisma.category.create({
            data: {
                name: category.name,
                ...(category.description !== undefined
                    ? { description: category.description }
                    : {}),
            },
        });
    }
    async updateCategory(id, category) {
        return await this.prisma.category.update({
            where: { id },
            data: {
                ...(category.name !== undefined ? { name: category.name } : {}),
                ...(category.description !== undefined
                    ? { description: category.description }
                    : {}),
            },
        });
    }
    async deleteCategory(id) {
        return await this.prisma.category.delete({ where: { id } });
    }
}
exports.CategoryRepository = CategoryRepository;
//# sourceMappingURL=index.js.map