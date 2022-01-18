import { Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { AbstractResolver } from '../core/models/abstract.resolver';
import { OrderItem } from './order-item.entity';
import { OrderItemInput } from './types/order-item.input';
import { OrderItemService } from './order-item.service';

@Resolver()
@Service()
export class OrderItemResolver extends AbstractResolver(OrderItem, OrderItemInput) {
  constructor(protected orderItemService: OrderItemService) {
    super(orderItemService);
  }
}
