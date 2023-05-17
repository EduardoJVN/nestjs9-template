import { Resolver, Query } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { User } from 'src/entities/User.entity';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query((returns) => [User])
  login(): Promise<User[]> {
    return this.userService.login();
  }
}
