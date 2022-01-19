import { ApolloError } from 'apollo-server-express';
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { Context } from '../../ts/types/context.type';
import { AbstractResolver } from '../core/models/abstract.resolver';
import { StripeService } from '../core/stripe/stripe.service';
import { OrderItemService } from '../order-item/order-item.service';
import { Role } from '../user/types/role.enum';
import { Order } from './order.entity';
import { OrderService } from './order.service';
import { OrderInput } from './types/order.input';

@Resolver()
@Service()
export class OrderResolver extends AbstractResolver(Order, OrderInput) {
  constructor(
    protected orderService: OrderService,
    protected orderItemService: OrderItemService,
    protected stripeService: StripeService
  ) {
    super(orderService);
  }

  @Authorized()
  @Mutation(() => Order, { name: 'createOrder', description: 'Create Order' })
  async createOrder(@Arg('input') input: OrderInput, @Ctx() { user }: Context) {
    try {
      const stripeCharge = await this.stripeService.createPayment({
        amount: input.total * 100,
        confirm: true,
        currency: 'USD',
        payment_method: input.stripePaymentMethodId,
      });
      return await this.orderService.create({
        ...input,
        stripeChargeId: stripeCharge!.id,
        user: user!.id,
      });
    } catch (error) {
      throw new ApolloError(error.message);
    }
  }

  @Authorized()
  @Query(() => [Order])
  findMyOrders(@Ctx() { user }: Context) {
    return this.orderService.find({ user: user!.id });
  }

  @Authorized(Role.SELLER)
  @Query(() => [Order])
  findOrdersByShop(@Arg('shopId') shopId: string) {
    return this.orderService.find({ shop: shopId });
  }
}
