import { Injectable } from '@nestjs/common';
import { User } from './entities/user.model';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}
  // async create(userAccountDto?: any, userDetailsDto?: any) {
  //   //return await this.userRepository.create(userAccountDto, userDetailsDto);
  // }

  async findOne(username: string): Promise<User> {
    return await this.userRepository.findOne(username);
  }
}
