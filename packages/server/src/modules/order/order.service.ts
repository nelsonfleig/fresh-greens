import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { AbstractService } from '../core/models/abstract.service';
import { OrderItemService } from '../order-item/order-item.service';
import { Order } from './order.entity';
import { OrderInput } from './types/order.input';

@Service()
export class OrderService extends AbstractService {
  constructor(
    @InjectRepository(Order) protected orderRepo: Repository<Order>,
    protected orderItemService: OrderItemService
  ) {
    super(orderRepo);
  }

  async create(data: OrderInput & { user: number }): Promise<Order> {
    const createdOrder = await super.create(data);
    // Create order items
    try {
      const res = await Promise.all(
        data.orderItems?.map(orderItem =>
          this.orderItemService.create({ ...orderItem, order: createdOrder.id })
        )
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    return createdOrder;
  }
}
