import { ResponseRatingDto } from "../model/dto";
import { IRatingRepository, IRatingUseCase } from "../../interface";
import { CreateRatingDto, UpdateRatingDto } from "../model/dto";
export declare class RatingUseCase implements IRatingUseCase {
    private repository;
    constructor(repository: IRatingRepository);
    createRating(rating: CreateRatingDto): Promise<ResponseRatingDto>;
    updateRating(id: string, rating: UpdateRatingDto): Promise<ResponseRatingDto>;
    deleteRating(id: string): Promise<ResponseRatingDto>;
    getRatingById(id: string): Promise<ResponseRatingDto>;
}
//# sourceMappingURL=index.d.ts.map