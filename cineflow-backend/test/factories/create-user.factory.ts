import { faker } from '@faker-js/faker';
import { Role } from '@prisma/client';

import {
  CreateUserDto,
  CreateEmployeeDto,
} from '../../src/users/dto/create-users.dto';

export function makeCreateUserDTO(
  override: Partial<CreateUserDto> = {},
): CreateUserDto {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password(),
    phone: faker.phone.number(),
    avatar: '',

    ...override,
  };
}

export function makeCreateEmployeeDTO(
  override: Partial<CreateEmployeeDto> = {},
): CreateEmployeeDto {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password(),
    phone: faker.phone.number(),
    role: Role.EMPLOYEE,
    avatar: '',

    ...override,
  };
}
