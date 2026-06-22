/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto, CreateEmployeeDto } from './create-users.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
