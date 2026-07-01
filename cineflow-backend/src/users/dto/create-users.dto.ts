import {
  IsEmail,
  IsOptional,
  IsString,
  IsNotEmpty,
  IsEnum,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  @MinLength(3, { message: 'Name must be at least 3 characters long' })
  @MaxLength(50, { message: 'Name must be at most 50 characters long' })
  @ApiProperty({
    example: 'John Doe',
  })
  name!: string;

  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  @MaxLength(100, { message: 'Email must be at most 100 characters long' })
  @ApiProperty({
    example: 'john.doe@example.com',
  })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @MaxLength(32, { message: 'Password must be at most 32 characters long' })
  @Matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    {
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    },
  )
  @ApiProperty({
    example: 'P@ssw0rd!',
  })
  password!: string;

  @IsOptional()
  @IsString()
  @Matches(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, {
    message: 'Telefone inválido',
  })
  @ApiProperty({
    example: '(12) 34567-8901',
  })
  phone?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'https://example.com/avatar.jpg',
  })
  avatar?: string;
}

export class CreateEmployeeDto extends CreateUserDto {
  @IsNotEmpty({ message: 'Role is required' })
  @IsEnum(Role, { message: 'Role must be either CUSTOMER, EMPLOYEE or ADMIN' })
  @ApiProperty({
    example: 'EMPLOYEE',
  })
  role!: Role;
}
