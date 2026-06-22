import { CreateUserDto, CreateEmployeeDto } from '../dto/create-users.dto';
import { UpdateUserDto } from '../dto/update-users.dto';
import { UserEntity } from '../entities/users.entity';

export interface IUsersRepository {
  createUser(createUserDto: CreateUserDto): Promise<UserEntity | null>;
  createEmployee(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<UserEntity | null>;
  findAll(): Promise<UserEntity[] | null>;
  findById(id: string): Promise<UserEntity | null>;
  findByEmail(email: string): Promise<UserEntity | null>;
  update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity | null>;
  remove(id: string): Promise<void>;
}
