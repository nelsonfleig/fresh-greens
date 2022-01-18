import { Field, InputType } from 'type-graphql';
import { OrderItemInput } from '../../order-item/types/order-item.input';

@InputType()
export class OrderInput {
  @Field()
  address?: string;

  @Field()
  city?: string;

  @Field()
  zipCode?: string;

  @Field()
  total?: number;

  @Field()
  shop: string;

  @Field(() => [OrderItemInput])
  orderItems: OrderItemInput[];
}
