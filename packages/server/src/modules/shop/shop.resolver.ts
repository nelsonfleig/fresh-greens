import { ApolloError } from 'apollo-server-express';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { Arg, Authorized, Ctx, Mutation, Resolver, Query } from 'type-graphql';
import { Service } from 'typedi';
import { Context } from '../../ts/types/context.type';
import { AuthService } from '../auth/auth.service';
import { AbstractResolver } from '../core/models/abstract.resolver';
import { AWSUploaderService } from '../core/upload/aws-uploader.service';
import { Role } from '../user/types/role.enum';
import { UserService } from '../user/user.service';
import { Shop } from './shop.entity';
import { ShopService } from './shop.service';
import { ShopInput } from './types/shop.input';

@Resolver(() => Shop)
@Service()
export class ShopResolver extends AbstractResolver(Shop, ShopInput) {
  constructor(
    protected shopService: ShopService,
    protected authService: AuthService,
    protected awsUploader: AWSUploaderService,
    protected userService: UserService
  ) {
    super(shopService);
  }

  @Authorized()
  @Mutation(() => Shop, { name: 'createShop', description: 'Create Shop' })
  async createShop(
    @Arg('input') input: ShopInput,
    @Arg('shopImage', () => GraphQLUpload) file: FileUpload,
    @Ctx() { user, res }: Context
  ) {
    if (user) {
      const shopOwner = await this.userService.findOne({ id: user.id });

      if (!shopOwner.isSeller) {
        const updateData = {
          roles: [...user.roles, Role.SELLER],
          isSeller: true,
        };
        const updatedUser = await this.userService.update(user.id, updateData);
        this.authService.reissueAccessToken(updatedUser, res);
      }

      const imageUrl = await this.awsUploader.upload(file);

      return this.shopService.create({
        ...input,
        imageUrl,
        user: user.id,
      });
    }
    throw new ApolloError('Could not create shop');
  }

  @Query(() => Shop, { name: 'findShopBySlug', description: 'Find a shop by slug' })
  findShopBySlug(@Arg('slug') slug: string) {
    return this.shopService.findOne({ slug });
  }

  @Authorized(Role.SELLER)
  @Query(() => [Shop], { name: 'findMyShops', description: "Find logged in user's shops" })
  findMyShops(@Ctx() { user }: Context) {
    return this.shopService.find({ user: user!.id });
  }
}
