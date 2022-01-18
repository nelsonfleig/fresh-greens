import { Field, ObjectType } from 'type-graphql';
import { User } from '../../user/user.entity';

@ObjectType()
export class AuthResponse {
  @Field()
  accessToken: string;

  @Field(() => User)
  user: User;
}
