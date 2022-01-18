import { NonEmptyArray } from 'type-graphql';
import { AuthResolver } from './auth/auth.resolver';
import { ExampleResolver } from './example/example.resolver';
import { ProductResolver } from './product/product.resolver';
import { ShopResolver } from './shop/shop.resolver';
import { UserResolver } from './user/user.resolver';

export const resolvers: NonEmptyArray<Function> = [
  ExampleResolver,
  UserResolver,
  AuthResolver,
  ProductResolver,
  ShopResolver,
];
