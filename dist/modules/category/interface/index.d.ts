import { Category } from "../domain/model/category";
import { CreateCategoryDto, UpdateCategoryDto, ResponseCategoryDto } from "../domain/model/dto";
export interface ICategoryRepository {
    getCategoryById(id: string): Promise<Category | null>;
    getCategoryByName(name: string): Promise<Category | null>;
    getAllCategory(): Promise<Category[]>;
    createCategory(category: CreateCategoryDto): Promise<Category>;
    updateCategory(id: string, category: UpdateCategoryDto): Promise<Category>;
    deleteCategory(id: string): Promise<Category>;
}
export interface ICategoryUseCase {
    getCategoryById(id: string): Promise<ResponseCategoryDto | null>;
    getCategoryByName(name: string): Promise<ResponseCategoryDto | null>;
    getAllCategory(): Promise<ResponseCategoryDto[]>;
    createCategory(category: CreateCategoryDto): Promise<ResponseCategoryDto>;
    updateCategory(id: string, category: UpdateCategoryDto): Promise<ResponseCategoryDto>;
    deleteCategory(id: string): Promise<ResponseCategoryDto>;
}
//# sourceMappingURL=index.d.ts.map