import { IUserRepository } from "../../interface";
import { User } from "../../domain/model/user";
import { PrismaClient } from "../../../../generated/prisma";
import { CreateUserDto, UpdateUserDto } from "../../domain/model/dto";
export declare class UserRepository implements IUserRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    getUserById(id: string): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
    createUser(user: CreateUserDto): Promise<User>;
    updateUser(id: string, user: UpdateUserDto): Promise<User>;
    deleteUser(id: string): Promise<User>;
}
//# sourceMappingURL=index.d.ts.map