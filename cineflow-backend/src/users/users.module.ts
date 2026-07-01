import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './repositories/users.repository';
import { PasswordService } from '../common/services/password.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, PasswordService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
