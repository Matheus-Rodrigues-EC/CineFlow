import { faker } from '@faker-js/faker';
import { Role } from '@prisma/client';

export function makeUser() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: 'hashedPassword', // You can replace this with a hashed password if needed
    phone: faker.phone.number(),
    avatar: faker.image.avatar(),
    role: Role.CUSTOMER,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
}

export function makeEmployee() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: 'hashedPassword', // You can replace this with a hashed password if needed
    phone: faker.phone.number(),
    avatar: faker.image.avatar(),
    role: Role.EMPLOYEE,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
}
