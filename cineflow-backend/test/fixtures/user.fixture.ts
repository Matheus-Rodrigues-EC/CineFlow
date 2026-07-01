import { Role } from '@prisma/client';

export const USER = {
  id: '1',
  name: 'Fulano de Tal',
  email: 'fulanodetal@email.com',
  password: '123',
  phone: null,
  avatar: null,
  role: Role.CUSTOMER,
  createdAt: new Date(),
  updatedAt: new Date(),
};
