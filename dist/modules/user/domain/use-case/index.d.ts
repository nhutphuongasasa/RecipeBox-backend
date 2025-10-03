import { IUserRepository, IUserUseCase } from "../../interface";
import { CreateUserDto, LoginUserDto, ResponseUserDto, UpdateUserDto } from "../model/dto";
import { User } from "../model/user";
export declare class UserUseCase implements IUserUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    registerUser(registerRequest: CreateUserDto): Promise<ResponseUserDto>;
    loginUser(loginRequest: LoginUserDto): Promise<ResponseUserDto>;
    getUserById(id: string): Promise<ResponseUserDto | null>;
    getUserByEmail(email: string): Promise<ResponseUserDto | null>;
    createUser(user: CreateUserDto): Promise<ResponseUserDto>;
    updateUser(id: string, user: UpdateUserDto): Promise<ResponseUserDto>;
    deleteUser(id: string): Promise<User>;
}
//# sourceMappingURL=index.d.ts.map