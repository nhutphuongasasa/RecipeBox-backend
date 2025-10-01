import { ICommentRepository } from "../../interface";
import { CommentEntity } from "../model/comment";
import {
  CreateCommentDto,
  ResponseCommentDto,
  UpdateCommentDto,
} from "../model/dto";
import { ICommentUseCase } from "../../interface";
import { IUserUseCase } from "../../../user/interface";
import { IRecipeUseCase } from "../../../recipe/interface";

export class CommentUseCase implements ICommentUseCase {
  constructor(
    private commentRepository: ICommentRepository,
    private userUseCase: IUserUseCase,
    private recipeUseCase: IRecipeUseCase
  ) {}

  async createComment(
    commentRequest: CreateCommentDto
  ): Promise<ResponseCommentDto> {
    const user = await this.userUseCase.getUserById(commentRequest.userId);
    if (!user) {
      throw new Error("User not found");
    }

    const recipe = await this.recipeUseCase.getRecipeById(
      commentRequest.recipeId,
      {
        userId: commentRequest.userId,
      }
    );

    if (!recipe) {
      throw new Error("Recipe not found");
    }

    const comment = await this.commentRepository.createComment(commentRequest);

    return ResponseCommentDto.parse(comment);
  }

  async updateComment(
    id: string,
    commentRequest: UpdateCommentDto
  ): Promise<ResponseCommentDto> {
    const comment = await this.commentRepository.getById(id);

    if (!comment) {
      throw new Error("Comment not found");
    }

    return ResponseCommentDto.parse(
      await this.commentRepository.updateComment(id, commentRequest)
    );
  }

  async deleteComment(id: string): Promise<ResponseCommentDto> {
    const comment = await this.commentRepository.getById(id);

    if (!comment) {
      throw new Error("Comment not found");
    }

    return ResponseCommentDto.parse(
      await this.commentRepository.deleteComment(id)
    );
  }

  async getCommentByRecipeId(recipeId: string): Promise<ResponseCommentDto[]> {
    // return ResponseCommentDto.parse(
    //   await this.commentRepository.getCommentByRecipeId(recipeId)
    // );
    throw new Error("Method not implemented.");
  }

  async getCommentByUserId(userId: string): Promise<ResponseCommentDto[]> {
    // return ResponseCommentDto.parse(
    //   await this.commentRepository.getCommentByUserId(userId)
    // );
    throw new Error("Method not implemented.");
  }
}
