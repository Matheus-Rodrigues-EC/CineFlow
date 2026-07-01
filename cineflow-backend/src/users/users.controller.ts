import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { UsersService } from './users.service';

import { CreateUserDto, CreateEmployeeDto } from './dto/create-users.dto';
import { UpdateUserDto, UpdateEmployeeDto } from './dto/update-users.dto';

import { UserEntity } from './entities/users.entity';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/customer')
  @ApiOperation({
    summary: 'Create a new user',
  })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
  })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.usersService.create(createUserDto);
  }

  @Post('/employee')
  @ApiOperation({
    summary: 'Create a new employee',
  })
  @ApiResponse({
    status: 201,
    description: 'Employee created successfully',
  })
  async createEmployee(
    @Body() createEmployeeDto: CreateEmployeeDto,
  ): Promise<UserEntity> {
    return this.usersService.createEmployee(createEmployeeDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Find all users',
  })
  @ApiResponse({
    status: 200,
    description: 'Return all users',
  })
  async findAll(): Promise<UserEntity[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find user by ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Return user by ID',
  })
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<UserEntity> {
    return await this.usersService.findById(id);
  }

  @Patch('/customer/:id')
  @ApiOperation({
    summary: 'Update user',
  })
  @ApiResponse({
    status: 200,
    description: 'User updated successfully',
  })
  async updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    return this.usersService.update(id, updateUserDto);
  }

  @Patch('/employee/:id')
  @ApiOperation({
    summary: 'Update employee',
  })
  @ApiResponse({
    status: 200,
    description: 'Employee updated successfully',
  })
  async updateEmployee(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<UserEntity> {
    return this.usersService.updateEmployee(id, updateEmployeeDto);
  }

  @Delete('/customer/:id')
  @ApiOperation({
    summary: 'Delete user',
  })
  @ApiResponse({
    status: 200,
    description: 'User deleted successfully',
  })
  async removeCustomer(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.usersService.remove(id);
  }

  @Delete('/employee/:id')
  @ApiOperation({
    summary: 'Delete employee',
  })
  @ApiResponse({
    status: 200,
    description: 'Employee deleted successfully',
  })
  async removeEmployee(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
