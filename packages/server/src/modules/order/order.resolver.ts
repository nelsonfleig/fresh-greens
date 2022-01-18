import { Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { Context } from '../../ts/types/context.type';
import { AbstractResolver } from '../core/models/abstract.resolver';
import { OrderItemService } from '../order-item/order-item.service';
import { Order } from './order.entity';
import { OrderService } from './order.service';
import { OrderInput } from './types/order.input';

@Resolver()
@Service()
export class OrderResolver extends AbstractResolver(Order, OrderInput) {
  constructor(protected orderService: OrderService, protected orderItemService: OrderItemService) {
    super(orderService);
  }

  @Authorized()
  @Mutation(() => Order, { name: 'createOrder', description: 'Create Order' })
  createOrder(@Arg('input') input: OrderInput, @Ctx() { user }: Context) {
    return this.orderService.create({ ...input, user: user!.id });
  }
}
