import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Context } from '../../ts/types/context.type';
import { User } from '../user/user.entity';
import { AuthService } from './auth.service';
import { AuthResponse } from './types/auth.response';
import { LoginInput } from './types/login.input';

@Resolver()
export class AuthResolver {
  constructor(protected authService: AuthService) {}

  @Mutation(() => AuthResponse, { description: 'Login user' })
  login(@Arg('input') input: LoginInput) {
    return this.authService.login(input);
  }

  @Mutation(() => User, { description: 'Register user' })
  register(@Arg('input') input: LoginInput) {
    return this.authService.register(input);
  }

  @Query(() => User, { description: 'Get logged in user', nullable: true })
  me(@Ctx() { user }: Context) {
    if (user) {
      const updatedUser = { ...user };
      // Change serialized date strings to Date object to fulfill
      // the query's return type requirement
      updatedUser.createdAt = new Date(user.createdAt);
      updatedUser.updatedAt = new Date(user.updatedAt);
      return updatedUser;
    }
    return null;
  }
}
