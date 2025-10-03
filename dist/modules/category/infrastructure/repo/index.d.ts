import { PrismaClient } from "../../../../generated/prisma";
import { Category } from "../../domain/model/category";
import { CreateCategoryDto, UpdateCategoryDto } from "../../domain/model/dto";
import { ICategoryRepository } from "../../interface";
export declare class CategoryRepository implements ICategoryRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    getAllCategory(): Promise<Category[]>;
    getCategoryById(id: string): Promise<Category | null>;
    getCategoryByName(name: string): Promise<Category | null>;
    createCategory(category: CreateCategoryDto): Promise<Category>;
    updateCategory(id: string, category: UpdateCategoryDto): Promise<Category>;
    deleteCategory(id: string): Promise<Category>;
}
//# sourceMappingURL=index.d.ts.map