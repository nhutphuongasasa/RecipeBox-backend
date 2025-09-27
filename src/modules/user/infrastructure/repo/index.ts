import { IUserRepository } from "../../interface";
import { User } from "../../domain/model/user";
import { PrismaClient } from "../../../../generated/prisma";
import { CreateUserDto, UpdateUserDto } from "../../domain/model/dto";

export class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaClient) {}

  async getUserById(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { id } });
  }
  async getUserByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { email } });
  }
  async createUser(user: CreateUserDto): Promise<User> {
    return await this.prisma.user.create({ data: user });
  }
  async updateUser(id: string, user: UpdateUserDto): Promise<User> {
    return await this.prisma.user.update({
      where: { id },
      data: {
        ...(user.name ? { name: user.name } : {}),
        ...(user.email ? { email: user.email } : {}),
        ...(user.password ? { password: user.password } : {}),
      },
    });
  }
  async deleteUser(id: string): Promise<User> {
    return await this.prisma.user.delete({ where: { id } });
  }
}
