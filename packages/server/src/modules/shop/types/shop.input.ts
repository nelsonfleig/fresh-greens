import { Field, InputType } from 'type-graphql';

@InputType()
export class ShopInput {
  @Field()
  name?: string;

  @Field()
  address?: string;

  @Field()
  city?: string;

  @Field()
  zipCode?: string;
}
