import { ICategoryRepository, ICategoryUseCase } from "../../interface";
import { CreateCategoryDto, ResponseCategoryDto, UpdateCategoryDto } from "../model/dto";
export declare class CategoryUseCase implements ICategoryUseCase {
    private categoryRepository;
    constructor(categoryRepository: ICategoryRepository);
    getAllCategory(): Promise<ResponseCategoryDto[]>;
    getCategoryById(id: string): Promise<ResponseCategoryDto | null>;
    getCategoryByName(name: string): Promise<ResponseCategoryDto | null>;
    createCategory(category: CreateCategoryDto): Promise<ResponseCategoryDto>;
    updateCategory(id: string, category: UpdateCategoryDto): Promise<ResponseCategoryDto>;
    deleteCategory(id: string): Promise<ResponseCategoryDto>;
}
//# sourceMappingURL=index.d.ts.map