import { IIngredientRepository } from "../../interface";
import { CreateIngredientDto } from "../../domain/model/dto";
import { Ingredient } from "../../domain/model/ingredient";
import { UpdateIngredientDto } from "../../domain/model/dto";
import { PrismaClient } from "../../../../generated/prisma";
export declare class IngredientRepository implements IIngredientRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    getIngredientByName(name: string): Promise<Ingredient | null>;
    createIngredient(ingredient: CreateIngredientDto): Promise<Ingredient>;
    updateIngredient(id: string, ingredient: UpdateIngredientDto): Promise<Ingredient>;
    deleteIngredient(id: string): Promise<Ingredient>;
    getIngredientById(id: string): Promise<Ingredient | null>;
}
//# sourceMappingURL=index.d.ts.map