import { Test, TestingModule } from '@nestjs/testing';
import { UserEntity } from './entities/users.entity';
import { UsersService } from './users.service';
import { UsersRepository } from './repositories/users.repository';
import { PasswordService } from '../common/services/password.service';
import {
  userRepositoryMock,
  resetMocks,
} from '../../test/mocks/user.repository.mock';
import { passwordServiceMock } from '../../test/mocks/password.service.mock';
import { makeUser, makeEmployee } from '../../test/factories/user.factory';
import {
  makeCreateUserDTO,
  makeCreateEmployeeDTO,
} from '../../test/factories/create-user.factory';
import { ConflictException } from '@nestjs/common';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersRepository,
          useValue: userRepositoryMock,
        },
        {
          provide: PasswordService,
          useValue: passwordServiceMock,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);

    resetMocks(userRepositoryMock);
  });

  describe('createCustomer', () => {
    it('should create a new user', async () => {
      const dto = makeCreateUserDTO();

      userRepositoryMock.findByEmail.mockResolvedValue(null);
      passwordServiceMock.hash.mockResolvedValue('Password@123');
      userRepositoryMock.createUser.mockResolvedValue({
        ...dto,
        password: 'Password@123',
      });
      const result = await service.create(dto);

      expect(result).toBeDefined();
      expect(passwordServiceMock.hash).toHaveBeenCalledWith(dto.password);
      expect(userRepositoryMock.findByEmail).toHaveBeenCalledWith(dto.email);
      expect(userRepositoryMock.createUser).toHaveBeenCalledWith({
        ...dto,
        password: 'Password@123',
      });

      expect(result.email).toBe(dto.email);
    });

    it('should throw ConflictException when email alread exists', async () => {
      const dto = makeCreateUserDTO();
      const existingUser = makeUser();

      userRepositoryMock.findByEmail.mockResolvedValue(existingUser);

      await expect(service.create(dto)).rejects.toThrow(ConflictException);
      await expect(service.create(dto)).rejects.toThrow(
        'There is already a user with this email',
      );

      expect(userRepositoryMock.findByEmail).toHaveBeenCalledWith(dto.email);
      expect(userRepositoryMock.createUser).not.toHaveBeenCalled();
    });

    it('should hash password before saving', async () => {
      const dto = makeCreateUserDTO();

      passwordServiceMock.hash.mockResolvedValue('hashedPassword');

      await service.create(dto);

      expect(userRepositoryMock.createUser).toHaveBeenCalledWith({
        ...dto,
        password: 'hashedPassword',
      });
    });

    it('should return a UserEntity', async () => {
      const dto = makeCreateUserDTO();

      passwordServiceMock.hash.mockResolvedValue('Password@123');
      userRepositoryMock.createUser.mockResolvedValue(
        new UserEntity({
          ...dto,
          password: 'Password@123',
        }),
      );
      const result = await service.create(dto);

      expect(result).toBeInstanceOf(UserEntity);
    });
  });

  describe('createEmployee', () => {
    it('should create a new employee', async () => {
      const dto = makeCreateEmployeeDTO();

      userRepositoryMock.findByEmail.mockResolvedValue(null);
      passwordServiceMock.hash.mockResolvedValue('Password@123');
      userRepositoryMock.createEmployee.mockResolvedValue({
        ...dto,
        password: 'Password@123',
      });
      const result = await service.createEmployee(dto);

      expect(result).toBeDefined();
      expect(passwordServiceMock.hash).toHaveBeenCalledWith(dto.password);
      expect(userRepositoryMock.findByEmail).toHaveBeenCalledWith(dto.email);
      expect(userRepositoryMock.createEmployee).toHaveBeenCalledWith({
        ...dto,
        password: 'Password@123',
      });

      expect(result.email).toBe(dto.email);
    });

    it('should throw ConflictException when email alread exists', async () => {
      const dto = makeCreateEmployeeDTO();
      const existingUser = makeEmployee();

      userRepositoryMock.findByEmail.mockResolvedValue(existingUser);

      await expect(service.create(dto)).rejects.toThrow(ConflictException);
      await expect(service.create(dto)).rejects.toThrow(
        'There is already a user with this email',
      );

      expect(userRepositoryMock.findByEmail).toHaveBeenCalledWith(dto.email);
      expect(userRepositoryMock.createEmployee).not.toHaveBeenCalled();
    });

    it('should hash password before saving', async () => {
      const dto = makeCreateEmployeeDTO();

      passwordServiceMock.hash.mockResolvedValue('hashedPassword');

      await service.createEmployee(dto);

      expect(userRepositoryMock.createEmployee).toHaveBeenCalledWith({
        ...dto,
        password: 'hashedPassword',
      });
    });

    it('should return a UserEntity', async () => {
      const dto = makeCreateEmployeeDTO();

      passwordServiceMock.hash.mockResolvedValue('Password@123');
      userRepositoryMock.createEmployee.mockResolvedValue(
        new UserEntity({
          ...dto,
          password: 'Password@123',
        }),
      );
      const result = await service.createEmployee(dto);

      expect(result).toBeInstanceOf(UserEntity);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const dto = makeCreateUserDTO();

      passwordServiceMock.hash.mockResolvedValue('Password@123');
      userRepositoryMock.createUser.mockResolvedValue({
        ...dto,
        password: 'Password@123',
      });
      userRepositoryMock.findAll.mockResolvedValue([makeUser(), makeUser()]);

      const result = await service.findAll();

      expect(result).toHaveLength(2);
    });

    it('should return an empty array when no users found', async () => {
      userRepositoryMock.findAll.mockResolvedValue([]);

      const result = await service.findAll();

      expect(result).toHaveLength(0);
    });
  });

  // describe('findById', () => {
  //   it('should return a user by ID', async () => {});
  // });

  // describe('findByEmail', () => {
  //   it('should return a user by email', async () => {});
  // });

  // describe('update', () => {
  //   it('should update a user by ID', async () => {});
  // });

  // describe('updateEmployee', () => {
  //   it('should update an employee by ID', async () => {});
  // });

  // describe('remove', () => {
  //   it('should remove a user by ID', async () => {});
  // });

  // describe('removeEmployee', () => {
  //   it('should remove an employee by ID', async () => {});
  // });
});
