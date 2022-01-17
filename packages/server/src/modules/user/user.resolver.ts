import { ApolloError } from 'apollo-server-express';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { Context } from '../../ts/types/context.type';
import { AuthService } from '../auth/auth.service';
import { AbstractResolver } from '../core/models/abstract.resolver';
import { AWSUploaderService } from '../core/upload/aws-uploader.service';
import { Role } from './types/role.enum';
import { UpgradeToSellerInput } from './types/upgrade-seller.input';
import { UserInput } from './types/user.input';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver()
@Service()
export class UserResolver extends AbstractResolver(User, UserInput) {
  constructor(
    protected userService: UserService,
    protected authService: AuthService,
    protected awsUploader: AWSUploaderService
  ) {
    super(userService);
  }

  @Authorized()
  @Mutation(() => User)
  async upgradeToSeller(
    @Arg('input') input: UpgradeToSellerInput,
    @Arg('sellerImage', () => GraphQLUpload) file: FileUpload,
    @Ctx() { user, res }: Context
  ) {
    if (user) {
      const sellerImageUrl = await this.awsUploader.upload(file);
      const updatedUserDate = {
        roles: [...user.roles, Role.SELLER],
        sellerImageUrl,
        isSeller: true,
        ...input,
      };
      const updatedUser = await this.userService.update(user.id, updatedUserDate);
      this.authService.reissueAccessToken(updatedUser, res);
      return updatedUser;
    }
    throw new ApolloError('Could not upgrade account');
  }
}
