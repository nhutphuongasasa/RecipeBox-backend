"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeRepository = void 0;
const prisma_1 = require("../../../../generated/prisma");
class RecipeRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async countRecipeByCategory(category, userId) {
        const existingCategory = await this.prisma.category.findUnique({
            where: {
                name: category,
            },
        });
        if (!existingCategory) {
            throw new Error("Category not found");
        }
        const result = await this.prisma.recipe.count({
            where: {
                categoryId: existingCategory.id,
                userId: userId,
            },
        });
        return result;
    }
    async getRecipeByUserId(userId) {
        const result = await this.prisma.recipe.findMany({
            where: {
                userId,
            },
            include: {
                ingredient: {
                    include: {
                        ingredient: true,
                    },
                },
                step: true,
                category: true,
                favorites: {
                    where: {
                        ...(userId && { userId }),
                    },
                },
            },
        });
        if (!result) {
            return null;
        }
        const recipes = result.map((recipe) => ({
            id: recipe.id,
            name: recipe.name,
            description: recipe.description,
            image_url: recipe.image_url,
            status: recipe.status,
            createdAt: recipe.createdAt,
            updatedAt: recipe.updatedAt,
            ingredient: recipe.ingredient.map((ingredient) => ({
                id: ingredient.id,
                ingredientName: ingredient.ingredient.name,
                quantity: ingredient.quantity,
            })),
            category: recipe.category?.name,
            step: recipe.step.map((step) => ({
                stepTitle: step.stepTitle,
                content: step.content,
            })),
            hasFavorites: recipe.favorites.length > 0 || false,
        }));
        return recipes;
    }
    async getAllRecipe(page, limit, cond) {
        const totalCount = await this.prisma.recipe.count();
        const result = await this.prisma.recipe.findMany({
            skip: (page - 1) * limit,
            take: limit,
            include: {
                ingredient: {
                    include: {
                        ingredient: true,
                    },
                },
                step: true,
                category: true,
                favorites: {
                    where: {
                        ...(cond.userId && { userId: cond.userId }),
                    },
                },
            },
        });
        if (!result) {
            return null;
        }
        const recipes = result.map((recipe) => ({
            id: recipe.id,
            name: recipe.name,
            description: recipe.description,
            image_url: recipe.image_url,
            status: recipe.status,
            createdAt: recipe.createdAt,
            updatedAt: recipe.updatedAt,
            ingredient: recipe.ingredient.map((ingredient) => ({
                id: ingredient.id,
                ingredientName: ingredient.ingredient.name,
                quantity: ingredient.quantity,
            })),
            category: recipe.category?.name,
            step: recipe.step.map((step) => ({
                stepTitle: step.stepTitle,
                content: step.content,
            })),
            hasFavorites: recipe.favorites.length > 0 || false,
        }));
        return { recipes, totalCount };
    }
    async getRecipeByName(name) {
        const result = await this.prisma.recipe.findUnique({
            where: {
                name,
            },
            include: {
                ingredient: {
                    include: {
                        ingredient: true,
                    },
                },
                step: true,
                category: true,
            },
        });
        if (!result) {
            return null;
        }
        return {
            id: result.id,
            name: result.name,
            description: result.description,
            image_url: result.image_url,
            status: result.status,
            createdAt: result.createdAt,
            updatedAt: result.updatedAt,
            ingredient: result.ingredient.map((ingredient) => ({
                id: ingredient.id,
                ingredientName: ingredient.ingredient.name,
                quantity: ingredient.quantity,
            })),
            category: result.category?.name,
            step: result.step.map((step) => ({
                stepTitle: step.stepTitle,
                content: step.content,
            })),
        };
    }
    async createRecipe(recipe, userId) {
        return await this.prisma.recipe.create({
            data: {
                image_url: recipe.image_url,
                name: recipe.name,
                description: recipe.description,
                status: prisma_1.RecipeStatus.NEW,
                category: {
                    connect: {
                        name: recipe.category,
                    },
                },
                ingredient: {
                    create: recipe.ingredient.map((ingredient) => ({
                        ingredient: {
                            connect: {
                                id: ingredient.id,
                            },
                        },
                        quantity: ingredient.quantity,
                    })),
                },
                step: {
                    create: recipe.step.map((step) => ({
                        stepTitle: step.stepTitle,
                        content: step.content,
                    })),
                },
                user: {
                    connect: {
                        id: userId,
                    },
                },
            },
        });
    }
    // async updateRecipe(
    //   id: string,
    //   recipe: UpdateRecipeDto,
    //   userId: string
    // ): Promise<Recipe> {
    //   const [deletedIngredients, deletedSteps, deletedRecipe, createdRecipe] =
    //     await this.prisma.$transaction([
    //       this.prisma.recipe_Ingredient.deleteMany({
    //         where: {
    //           recipeId: id,
    //         },
    //       }),
    //       this.prisma.step.deleteMany({
    //         where: {
    //           recipeId: id,
    //         },
    //       }),
    //       this.prisma.recipe.delete({
    //         where: {
    //           id,
    //         },
    //       }),
    //       this.prisma.recipe.create({
    //         data: {
    //           description: recipe.description,
    //           image_url: recipe.image_url,
    //           name: recipe.name,
    //           status: recipe.status,
    //           category: {
    //             connect: {
    //               name: recipe.category,
    //             },
    //           },
    //           ingredient: {
    //             create: recipe.ingredient.map((ingredient) => ({
    //               ingredient: {
    //                 connect: {
    //                   id: ingredient.id!,
    //                 },
    //               },
    //               quantity: ingredient.quantity,
    //             })),
    //           },
    //           step: {
    //             create: recipe.step.map((step) => ({
    //               stepTitle: step.stepTitle,
    //               content: step.content,
    //             })),
    //           },
    //           user: {
    //             connect: {
    //               id: userId,
    //             },
    //           },
    //         },
    //       }),
    //     ]);
    //   return createdRecipe;
    // }
    async updateRecipe(id, recipe, userId) {
        return await this.prisma.$transaction(async (tx) => {
            // Cập nhật recipe chính
            const updatedRecipe = await tx.recipe.update({
                where: { id },
                data: {
                    name: recipe.name,
                    description: recipe.description,
                    image_url: recipe.image_url,
                    status: recipe.status,
                    category: { connect: { name: recipe.category } },
                },
            });
            // Xóa và tạo ingredient mới
            await tx.recipe_Ingredient.deleteMany({ where: { recipeId: id } });
            await tx.recipe_Ingredient.createMany({
                data: recipe.ingredient.map((i) => ({
                    recipeId: id,
                    ingredientId: i.id,
                    quantity: i.quantity,
                })),
            });
            // Xóa và tạo step mới
            await tx.step.deleteMany({ where: { recipeId: id } });
            await tx.step.createMany({
                data: recipe.step.map((s) => ({
                    recipeId: id,
                    stepTitle: s.stepTitle,
                    content: s.content,
                })),
            });
            return updatedRecipe;
        });
    }
    async deleteRecipe(id) {
        const [deletedIngredients, deletedSteps, deletedRecipe] = await this.prisma.$transaction([
            this.prisma.recipe_Ingredient.deleteMany({
                where: {
                    recipeId: id,
                },
            }),
            this.prisma.step.deleteMany({
                where: {
                    recipeId: id,
                },
            }),
            this.prisma.recipe.delete({
                where: {
                    id,
                },
            }),
        ]);
        return deletedRecipe;
    }
    async getRecipeById(id, cond) {
        const result = await this.prisma.recipe.findUnique({
            where: {
                id,
            },
            include: {
                ingredient: {
                    include: {
                        ingredient: true,
                    },
                },
                step: true,
                category: true,
                user: true,
                favorites: {
                    where: {
                        ...(cond.userId && { userId: cond.userId }),
                    },
                },
            },
        });
        if (!result) {
            return null;
        }
        return {
            id: result.id,
            name: result.name,
            description: result.description,
            image_url: result.image_url,
            status: result.status,
            createdAt: result.createdAt,
            updatedAt: result.updatedAt,
            hasFavorites: result.favorites.length > 0 || false,
            ingredient: result.ingredient.map((ingredient) => ({
                id: ingredient.id,
                ingredientName: ingredient.ingredient.name,
                quantity: ingredient.quantity,
            })),
            category: result.category?.name,
            step: result.step.map((step) => ({
                stepTitle: step.stepTitle,
                content: step.content,
            })),
            // comments: result.comments,
            // ratings: result.ratings,
            authorId: result.user.id,
        };
    }
    async filterbyCategory(categoryName, page, limit) {
        const category = await this.prisma.category.findUnique({
            where: {
                name: categoryName,
            },
        });
        if (!category) {
            throw new Error("Category not found");
        }
        const totalCount = await this.prisma.recipe.count({
            where: {
                categoryId: category.id,
            },
        });
        const recipes = await this.prisma.recipe.findMany({
            skip: (page - 1) * limit,
            take: limit,
            where: {
                categoryId: category.id,
            },
            include: {
                ingredient: {
                    include: {
                        ingredient: true,
                    },
                },
                step: true,
                category: true,
            },
        });
        const result = recipes.map((recipe) => ({
            id: recipe.id,
            name: recipe.name,
            description: recipe.description,
            image_url: recipe.image_url,
            status: recipe.status,
            createdAt: recipe.createdAt,
            updatedAt: recipe.updatedAt,
            ingredient: recipe.ingredient.map((ingredient) => ({
                id: ingredient.id,
                ingredientName: ingredient.ingredient.name,
                quantity: ingredient.quantity,
            })),
            category: recipe.category?.name,
            step: recipe.step.map((step) => ({
                stepTitle: step.stepTitle,
                content: step.content,
            })),
            // ratings: recipe.ratings,
        }));
        return { recipes: result, totalCount: totalCount };
    }
    async filterbyIngredient(ingredient, page, limit) {
        const existingIngredient = await this.prisma.ingredient.findUnique({
            where: {
                name: ingredient,
            },
            include: {
                ingredient: true,
            },
        });
        if (!existingIngredient) {
            throw new Error("Ingredient not found");
        }
        const recipeIds = existingIngredient.ingredient.map((ri) => ri.recipeId);
        const recipes = await this.prisma.recipe.findMany({
            skip: (page - 1) * limit,
            take: limit,
            where: {
                id: { in: recipeIds },
            },
            include: {
                ingredient: {
                    include: {
                        ingredient: true,
                    },
                },
                step: true,
                category: true,
            },
        });
        const result = recipes.map((recipe) => ({
            id: recipe.id,
            name: recipe.name,
            description: recipe.description,
            image_url: recipe.image_url,
            status: recipe.status,
            createdAt: recipe.createdAt,
            updatedAt: recipe.updatedAt,
            ingredient: recipe.ingredient.map((ingredient) => ({
                id: ingredient.id,
                ingredientName: ingredient.ingredient.name,
                quantity: ingredient.quantity,
            })),
            category: recipe.category?.name,
            step: recipe.step.map((step) => ({
                stepTitle: step.stepTitle,
                content: step.content,
            })),
            // ratings: recipe.ratings,
        }));
        return { recipes: result, totalCount: recipeIds.length };
    }
}
exports.RecipeRepository = RecipeRepository;
//# sourceMappingURL=index.js.map