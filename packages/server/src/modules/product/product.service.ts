import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { AbstractService } from '../core/models/abstract.service';
import { Product } from './product.entity';

@Service()
export class ProductService extends AbstractService {
  constructor(@InjectRepository(Product) protected productRepo: Repository<Product>) {
    super(productRepo);
  }
}
