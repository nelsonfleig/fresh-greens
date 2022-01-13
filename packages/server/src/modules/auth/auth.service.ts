import { ApolloError } from 'apollo-server-express';
import argon2 from 'argon2';
import { Service } from 'typedi';
import { JwtService } from '../core/jwt/jwt.service';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { LoginInput } from './types/login.input';
import { RegisterInput } from './types/register.input';

@Service()
export class AuthService {
  constructor(protected userService: UserService, protected jwtService: JwtService) {}

  async login({ email, password }: LoginInput): Promise<{ accessToken: string }> {
    const errorMsg = 'Invalid email or password';

    const user = await this.userService.findOne({ email });
    if (!user) {
      throw new ApolloError(errorMsg);
    }

    // validate password
    const passwordIsValid = await argon2.verify(user.password, password);

    if (!passwordIsValid) {
      throw new ApolloError(errorMsg);
    }

    const accessToken = this.jwtService.signJwt(
      {
        id: user.id,
        roles: user.roles,
      },
      'accessTokenPrivateKey',
      {
        expiresIn: '30d',
      }
    );
    // TODO: sign a refresh token to send to client

    return { accessToken };
  }

  async register(input: RegisterInput): Promise<User> {
    return this.userService.create(input);
  }
}
