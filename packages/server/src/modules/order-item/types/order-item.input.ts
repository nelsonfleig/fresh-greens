import { Field, InputType } from 'type-graphql';

@InputType()
export class OrderItemInput {
  @Field()
  qty: number;

  @Field()
  product?: string;
}
