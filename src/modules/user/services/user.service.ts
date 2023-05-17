import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/User.entity';

@Injectable()
export class UserService {
  async login(): Promise<User[]> {
    return [
      {
        id: 1,
        email: 'test',
        password: 'test',
      },
    ];
  }
}
