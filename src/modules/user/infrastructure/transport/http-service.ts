import { NextFunction, Request, Response } from "express";
import { UserUseCase } from "../../domain/use-case";
import {
  RegisterUserDto,
  LoginUserDto,
  CreateUserDto,
  UpdateUserDto,
} from "../../domain/model/dto";

export class UserHttpService {
  constructor(private userUseCase: UserUseCase) {}

  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const registerRequest = RegisterUserDto.parse(req.body);

      const user = await this.userUseCase.registerUser(registerRequest);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const loginRequest = LoginUserDto.parse(req.body);

      const user = await this.userUseCase.loginUser(loginRequest);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.id;

      if (!userId) {
        throw new Error("User ID is required");
      }

      const user = await this.userUseCase.getUserById(userId);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const createUserRequest = CreateUserDto.parse(req.body);

      const user = await this.userUseCase.createUser(createUserRequest);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.id);
      const userId = req.id;

      if (!userId) {
        throw new Error("User ID is required");
      }

      const updateUserRequest = UpdateUserDto.parse(req.body);

      const user = await this.userUseCase.updateUser(userId, updateUserRequest);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.id;

      if (!userId) {
        throw new Error("User ID is required");
      }

      const user = await this.userUseCase.deleteUser(userId);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async getUserByEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.params.email;

      if (!email) {
        throw new Error("Email is required");
      }

      const user = await this.userUseCase.getUserByEmail(email);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}
