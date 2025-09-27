import {
  RegisterUserDto,
  LoginUserDto,
  UpdateUserDto,
  CreateUserDto,
  ResponseUserDto,
} from "../domain/model/dto";
import { User } from "../domain/model/user";

export interface IUserUseCase {
  getUserById(id: string): Promise<ResponseUserDto | null>;
  getUserByEmail(email: string): Promise<ResponseUserDto | null>;
  createUser(user: CreateUserDto): Promise<ResponseUserDto>;
  updateUser(id: string, user: UpdateUserDto): Promise<ResponseUserDto>;
  deleteUser(id: string): Promise<User>;
  registerUser(user: RegisterUserDto): Promise<ResponseUserDto>;
  loginUser(user: LoginUserDto): Promise<ResponseUserDto>;
}

export interface IUserRepository {
  getUserById(id: string): Promise<User | null>;
  getUserByEmail(email: string): Promise<User | null>;
  createUser(user: CreateUserDto): Promise<User>;
  updateUser(id: string, user: UpdateUserDto): Promise<User>;
  deleteUser(id: string): Promise<User>;
}
