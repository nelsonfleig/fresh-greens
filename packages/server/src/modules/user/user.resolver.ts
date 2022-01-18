import { Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { AuthService } from '../auth/auth.service';
import { AbstractResolver } from '../core/models/abstract.resolver';
import { AWSUploaderService } from '../core/upload/aws-uploader.service';
import { UserInput } from './types/user.input';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
@Service()
export class UserResolver extends AbstractResolver(User, UserInput) {
  constructor(
    protected userService: UserService,
    protected authService: AuthService,
    protected awsUploader: AWSUploaderService
  ) {
    super(userService);
  }
}
