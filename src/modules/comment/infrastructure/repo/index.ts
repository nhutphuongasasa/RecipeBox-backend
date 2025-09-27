import { ICommentRepository } from "../../interface";
import { CommentEntity } from "../../domain/model/comment";
import { CreateCommentDto, UpdateCommentDto } from "../../domain/model/dto";
import { PrismaClient } from "../../../../generated/prisma";

export class CommentRepository implements ICommentRepository {
  constructor(private prisma: PrismaClient) {}

  async getById(id: string): Promise<CommentEntity | null> {
    return await this.prisma.comment.findUnique({
      where: {
        id,
      },
    });
  }

  async createComment(comment: CreateCommentDto): Promise<CommentEntity> {
    return await this.prisma.comment.create({
      data: comment,
    });
  }

  async updateComment(
    id: string,
    comment: UpdateCommentDto
  ): Promise<CommentEntity> {
    return await this.prisma.comment.update({
      where: {
        id,
      },
      data: comment,
    });
  }

  async deleteComment(id: string): Promise<CommentEntity> {
    return await this.prisma.comment.delete({
      where: {
        id,
      },
    });
  }

  async getCommentByRecipeId(recipeId: string): Promise<CommentEntity[]> {
    return await this.prisma.comment.findMany({
      where: {
        recipeId,
      },
    });
  }

  async getCommentByUserId(userId: string): Promise<CommentEntity[]> {
    return await this.prisma.comment.findMany({
      where: {
        userId,
      },
    });
  }
}
