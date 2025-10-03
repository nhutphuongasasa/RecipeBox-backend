import { IRatingRepository } from "../../interface";
import { Rating } from "../../domain/model/rating";
import { PrismaClient } from "../../../../generated/prisma";
import { CreateRatingDto } from "../../domain/model/dto";
import { UpdateRatingDto } from "../../domain/model/dto";
export declare class RatingRepository implements IRatingRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    createRating(rating: CreateRatingDto): Promise<Rating>;
    updateRating(id: string, rating: UpdateRatingDto): Promise<Rating>;
    deleteRating(id: string): Promise<Rating>;
    getRatingById(id: string): Promise<Rating | null>;
}
//# sourceMappingURL=index.d.ts.map