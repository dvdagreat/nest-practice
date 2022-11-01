import { Matches, Length, IsString, IsEmail } from 'class-validator';

export class CreateUserAccountDto {
  @IsString()
  @Length(6, 18)
  username: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  @Length(6, 18)
  @Matches('^[w!@#$%^&*()_+=<>?,./:";\'{}[]]+$')
  password: string;
}
