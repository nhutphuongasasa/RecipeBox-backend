import { IRatingRepository } from "../../interface";
import { Rating } from "../../domain/model/rating";
import { PrismaClient } from "../../../../generated/prisma";
import { CreateRatingDto } from "../../domain/model/dto";
import { UpdateRatingDto } from "../../domain/model/dto";

export class RatingRepository implements IRatingRepository {
  constructor(private prisma: PrismaClient) {}

  async createRating(rating: CreateRatingDto): Promise<Rating> {
    return await this.prisma.rating.create({ data: rating });
  }

  async updateRating(id: string, rating: UpdateRatingDto): Promise<Rating> {
    return await this.prisma.rating.update({ where: { id }, data: rating });
  }

  async deleteRating(id: string): Promise<Rating> {
    return await this.prisma.rating.delete({ where: { id } });
  }

  async getRatingById(id: string): Promise<Rating | null> {
    return await this.prisma.rating.findUnique({ where: { id } });
  }
}
