import { User } from '../entities/user.entity';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Match } from 'src/common/validation/match.validator';

export class ChangePasswordDto extends User {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Password too weak. The password must have a number, lowercase and uppercase letters and at least one special character.',
  })
  password: string;

  @Match('password')
  passwordConfirm: string;
}
