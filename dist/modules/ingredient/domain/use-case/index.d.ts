import { IIngredientRepository, IIngredientUseCase } from "../../interface";
import { CreateIngredientDto, ResponseIngredientDto } from "../../domain/model/dto";
import { UpdateIngredientDto } from "../../domain/model/dto";
import { Ingredient } from "../model/ingredient";
export declare class IngredientUseCase implements IIngredientUseCase {
    private repository;
    constructor(repository: IIngredientRepository);
    getIngredientByName(name: string): Promise<ResponseIngredientDto | null>;
    createIngredient(ingredient: CreateIngredientDto): Promise<Ingredient>;
    updateIngredient(id: string, ingredient: UpdateIngredientDto): Promise<ResponseIngredientDto>;
    deleteIngredient(id: string): Promise<ResponseIngredientDto>;
    getIngredientById(id: string): Promise<ResponseIngredientDto>;
}
//# sourceMappingURL=index.d.ts.map