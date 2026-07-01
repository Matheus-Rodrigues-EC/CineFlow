import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PasswordService } from '../common/services/password.service';

import { CreateUserDto, CreateEmployeeDto } from './dto/create-users.dto';
import { UpdateUserDto, UpdateEmployeeDto } from './dto/update-users.dto';

import { UserEntity } from './entities/users.entity';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly passwordService: PasswordService,
  ) {}

  // Create a new User
  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const userExists = await this.usersRepository.findByEmail(
      createUserDto.email,
    );

    if (userExists) {
      throw new ConflictException('There is already a user with this email');
    }

    const hashedPassword = await this.passwordService.hash(
      createUserDto.password,
    );

    const user = await this.usersRepository.createUser({
      ...createUserDto,
      password: hashedPassword,
    });

    return user;
  }

  // Create a new Employee
  async createEmployee(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<UserEntity> {
    const employeeExists = await this.usersRepository.findByEmail(
      createEmployeeDto.email,
    );

    if (employeeExists) {
      throw new ConflictException('Email already exists');
    }

    // TODO: Implement role-based access control to ensure that only authorized users can create employees with specific roles. For example, only admins should be able to create other admins.
    // if (createEmployeeDto.role === Role.ADMIN) {
    //        Apenas admins podem criar admins
    // }

    const hashedPassword = await this.passwordService.hash(
      createEmployeeDto.password,
    );

    const employee = await this.usersRepository.createEmployee({
      ...createEmployeeDto,
      password: hashedPassword,
    });

    return employee;
  }

  // Get all Users
  async findAll(): Promise<UserEntity[]> {
    const users = await this.usersRepository.findAll();

    return users?.map((user) => new UserEntity(user));
  }

  // Get a User by ID
  async findById(id: string): Promise<UserEntity> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return new UserEntity(user);
  }

  //Get a User by Email
  async findByEmail(email: string): Promise<UserEntity> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    return new UserEntity(user);
  }

  // Update a User by ID
  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const updatedUser = await this.usersRepository.update(id, updateUserDto);

    return new UserEntity(updatedUser);
  }

  // Update an Employee by ID
  async updateEmployee(
    id: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<UserEntity> {
    const employee = await this.usersRepository.findById(id);

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }

    const updatedEmployee = await this.usersRepository.updateEmployee(
      id,
      updateEmployeeDto,
    );

    return new UserEntity(updatedEmployee);
  }

  // Delete a User by ID
  async remove(id: string): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    await this.usersRepository.remove(id);
  }
}
