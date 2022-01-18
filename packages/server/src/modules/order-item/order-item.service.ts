import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { AbstractService } from '../core/models/abstract.service';
import { OrderItem } from './order-item.entity';

@Service()
export class OrderItemService extends AbstractService {
  constructor(@InjectRepository(OrderItem) protected orderItemRepo: Repository<OrderItem>) {
    super(orderItemRepo);
  }
}
