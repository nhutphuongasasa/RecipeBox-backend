import { Rating } from "../model/rating";
import { ResponseRatingDto } from "../model/dto";
import { IRatingRepository, IRatingUseCase } from "../../interface";
import { CreateRatingDto, UpdateRatingDto } from "../model/dto";

export class RatingUseCase implements IRatingUseCase {
  constructor(private repository: IRatingRepository) {}

  async createRating(rating: CreateRatingDto): Promise<ResponseRatingDto> {
    const existingRating = await this.repository.getRatingById(rating.recipeId);

    if (existingRating) {
      throw new Error("Rating already exists");
    }

    const newRating = await this.repository.createRating(rating);

    return ResponseRatingDto.parse(newRating);
  }

  async updateRating(
    id: string,
    rating: UpdateRatingDto
  ): Promise<ResponseRatingDto> {
    const existingRating = await this.repository.getRatingById(id);

    if (!existingRating) {
      throw new Error("Rating not found");
    }

    const updatedRating = await this.repository.updateRating(id, rating);

    return ResponseRatingDto.parse(updatedRating);
  }

  async deleteRating(id: string): Promise<ResponseRatingDto> {
    const existingRating = await this.repository.getRatingById(id);

    if (!existingRating) {
      throw new Error("Rating not found");
    }

    const deletedRating = await this.repository.deleteRating(id);

    return ResponseRatingDto.parse(deletedRating);
  }

  async getRatingById(id: string): Promise<ResponseRatingDto> {
    const rating = await this.repository.getRatingById(id);

    if (!rating) {
      throw new Error("Rating not found");
    }

    return ResponseRatingDto.parse(rating);
  }
}
