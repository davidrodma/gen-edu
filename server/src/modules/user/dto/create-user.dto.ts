import { IsUnique } from 'src/common/validation/is-unique.validator';
import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Match } from 'src/common/validation/match.validator';

export class CreateUserDto extends User {
  @IsEmail()
  @MaxLength(500)
  @IsUnique({ tableName: 'user', column: 'email' })
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Password too weak. The password must have a number, lowercase and uppercase letters and at least one special character.',
  })
  password: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Match('password')
  passwordConfirm: string;

  @MinLength(1)
  @MaxLength(255)
  @IsString()
  name: string;
}
