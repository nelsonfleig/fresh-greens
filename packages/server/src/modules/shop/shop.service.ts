import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { AbstractService } from '../core/models/abstract.service';
import { Shop } from './shop.entity';

@Service()
export class ShopService extends AbstractService {
  constructor(@InjectRepository(Shop) protected shopRepo: Repository<Shop>) {
    super(shopRepo);
  }
}
