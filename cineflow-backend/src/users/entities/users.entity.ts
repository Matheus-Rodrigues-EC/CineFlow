import { User, Role } from '@prisma/client';

export class UserEntity {
  id!: User['id'];
  name!: User['name'];
  email!: User['email'];
  password!: User['password'];
  phone!: User['phone'];
  avatar!: User['avatar'];
  role!: Role;
  createdAt!: User['createdAt'];
  updatedAt!: User['updatedAt'];

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
