import { Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { AbstractResolver } from '../core/models/abstract.resolver';
import { User } from './user.entity';
import { UserInput } from './types/user.input';
import { UserService } from './user.service';

@Resolver()
@Service()
export class UserResolver extends AbstractResolver(User, UserInput) {
  constructor(protected userService: UserService) {
    super(userService);
  }
}
