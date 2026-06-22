import { User } from '../../generated/prisma/client';
import { Role } from '../../generated/prisma/enums';

export class UserEntity {
  id!: User['id'];
  name!: User['name'];
  email!: User['email'];
  phone!: User['phone'];
  avatar!: User['avatar'];
  role!: Role;
  createdAt!: User['createdAt'];
  updatedAt!: User['updatedAt'];

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
