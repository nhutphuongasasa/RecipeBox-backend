import { generateToken } from "../../../../middleware/jwt/generateToken";
import { IUserRepository, IUserUseCase } from "../../interface";
import {
  CreateUserDto,
  LoginUserDto,
  ResponseUserDto,
  UpdateUserDto,
} from "../model/dto";
import { User, UserSchema } from "../model/user";

export class UserUseCase implements IUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async registerUser(registerRequest: CreateUserDto): Promise<ResponseUserDto> {
    const newUser = {
      name: registerRequest.name,
      email: registerRequest.email,
      password: registerRequest.password,
    };

    return ResponseUserDto.parse(await this.userRepository.createUser(newUser));
  }

  async loginUser(loginRequest: LoginUserDto): Promise<ResponseUserDto> {
    const user = await this.userRepository.getUserByEmail(loginRequest.email);
    if (!user) {
      throw new Error("User not found");
    }

    if (user.password !== loginRequest.password) {
      throw new Error("Invalid password");
    }

    const token = generateToken({
      id: user.id,
      email: user.email,
    });
    return ResponseUserDto.parse({ ...user, token });
  }

  async getUserById(id: string): Promise<ResponseUserDto | null> {
    return ResponseUserDto.parse(await this.userRepository.getUserById(id));
  }

  async getUserByEmail(email: string): Promise<ResponseUserDto | null> {
    return ResponseUserDto.parse(
      await this.userRepository.getUserByEmail(email)
    );
  }

  async createUser(user: CreateUserDto): Promise<ResponseUserDto> {
    const existingUser = await this.userRepository.getUserByEmail(user.email);
    if (existingUser) {
      throw new Error("User already exists");
    }
    return ResponseUserDto.parse(await this.userRepository.createUser(user));
  }

  async updateUser(id: string, user: UpdateUserDto): Promise<ResponseUserDto> {
    const existingUser = await this.userRepository.getUserById(id);
    if (!existingUser) {
      throw new Error("User not found");
    }

    const updatedUser = {
      name: user.name ? user.name : existingUser.name,
      email: user.email ? user.email : existingUser.email,
      password: user.password ? user.password : existingUser.password,
      comments: existingUser.comments,
      ratings: existingUser.ratings,
      favorites: existingUser.favorites,
    };

    return ResponseUserDto.parse(
      await this.userRepository.updateUser(id, updatedUser)
    );
  }

  async deleteUser(id: string): Promise<User> {
    return await this.userRepository.deleteUser(id);
  }
}
