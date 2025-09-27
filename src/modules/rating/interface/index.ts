import { CreateRatingDto } from "../domain/model/dto";
import { UpdateRatingDto } from "../domain/model/dto";
import { Rating } from "../domain/model/rating";
import { ResponseRatingDto } from "../domain/model/dto";

export interface IRatingRepository {
  createRating(rating: CreateRatingDto): Promise<Rating>;
  updateRating(id: string, rating: UpdateRatingDto): Promise<Rating>;
  deleteRating(id: string): Promise<Rating>;
  getRatingById(id: string): Promise<Rating | null>;
}

export interface IRatingUseCase {
  createRating(rating: Rating): Promise<ResponseRatingDto>;
  updateRating(id: string, rating: Rating): Promise<ResponseRatingDto>;
  deleteRating(id: string): Promise<ResponseRatingDto>;
  getRatingById(id: string): Promise<ResponseRatingDto>;
}
