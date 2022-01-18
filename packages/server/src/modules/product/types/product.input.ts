import { Field, InputType } from 'type-graphql';

@InputType()
export class ProductInput {
  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  description: string;

  @Field()
  unit: string;

  @Field()
  shop: string;
}
