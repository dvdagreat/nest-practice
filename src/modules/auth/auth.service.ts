import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/user.model';
import { UserRepository } from '../users/user.repository';

@Injectable()
export class AuthService {
  constructor(private userService: UserRepository) {}
  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.userService.findOne(username);

    if (user && user.password === password) {
      return user;
    }

    return null;
  }
}
