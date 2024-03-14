import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(name: string): User[];
    getUserById(id: number): User;
    createUser(body: CreateUserDto): User;
}
