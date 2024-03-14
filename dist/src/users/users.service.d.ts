import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private users;
    findAll(name?: string): User[];
    findById(userId: number): User;
    createUser(createUserDto: CreateUserDto): User;
}
