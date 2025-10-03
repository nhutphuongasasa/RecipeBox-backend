"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientRepository = void 0;
class IngredientRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getIngredientByName(name) {
        const ingredient = await this.prisma.ingredient.findFirst({
            where: { name: name },
            // include: { category: true },
        });
        console.log("ingredient", ingredient);
        return ingredient;
    }
    async createIngredient(ingredient) {
        const newIngredient = await this.prisma.ingredient.create({
            data: {
                name: ingredient.name,
                ...(ingredient.categoryId && { categoryId: ingredient.categoryId }),
            },
        });
        return newIngredient;
    }
    async updateIngredient(id, ingredient) {
        const updatedIngredient = await this.prisma.ingredient.update({
            where: { id },
            data: {
                ...(ingredient.name && { name: ingredient.name }),
                ...(ingredient.categoryId && { categoryId: ingredient.categoryId }),
            },
        });
        return updatedIngredient;
    }
    async deleteIngredient(id) {
        const deletedIngredient = await this.prisma.ingredient.delete({
            where: { id },
        });
        return deletedIngredient;
    }
    async getIngredientById(id) {
        const ingredient = await this.prisma.ingredient.findUnique({
            where: { id },
        });
        return ingredient;
    }
}
exports.IngredientRepository = IngredientRepository;
//# sourceMappingURL=index.js.map