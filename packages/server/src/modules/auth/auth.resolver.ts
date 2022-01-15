import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Context } from '../../ts/types/context.type';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { AuthResponse } from './types/auth.response';
import { LoginInput } from './types/login.input';
import { RegisterInput } from './types/register.input';

@Resolver()
export class AuthResolver {
  constructor(protected authService: AuthService, protected userService: UserService) {}

  @Mutation(() => AuthResponse, { description: 'Login user' })
  login(@Arg('input') input: LoginInput, @Ctx() { res }: Context) {
    return this.authService.login(input, res);
  }

  @Mutation(() => User, { description: 'Register user' })
  register(@Arg('input') input: RegisterInput) {
    return this.authService.register(input);
  }

  @Query(() => User, { description: 'Get logged in user', nullable: true })
  me(@Ctx() { user }: Context) {
    return this.userService.findOne({ id: user?.id });
  }

  @Authorized()
  @Mutation(() => Boolean, { description: 'Logout user' })
  logout(@Ctx() { res }: Context) {
    return this.authService.logout(res);
  }
}
