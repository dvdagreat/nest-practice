import { Expose } from 'class-transformer';
import { Matches, Length, IsString, IsNumber } from 'class-validator';

export class CreateUserDetailsDto {
  @Expose({ name: 'first_name' })
  @IsString()
  @Length(1, 50)
  @Matches('w+')
  first_name: string;

  @Expose({ name: 'last_name' })
  @IsString()
  @Length(1, 50)
  @Matches('w+')
  last_name: string;

  @Expose({ name: 'user_id' })
  @IsNumber()
  @Matches('d+')
  user_id: number;
}
