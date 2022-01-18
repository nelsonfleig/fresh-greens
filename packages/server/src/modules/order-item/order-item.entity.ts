/* eslint-disable import/no-cycle */
import { Field, ObjectType } from 'type-graphql';
import { TypeormLoader } from 'type-graphql-dataloader';
import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../core/models/abstract.entity';
import { Order } from '../order/order.entity';
import { Product } from '../product/product.entity';

@ObjectType()
@Entity('order_items')
export class OrderItem extends AbstractEntity {
  @Field()
  @Column()
  qty: number;

  @Field(() => Product)
  @ManyToOne(() => Product, product => product.orderItems)
  @TypeormLoader()
  product: Product;

  @Field(() => Order)
  @ManyToOne(() => Order, order => order.orderItems)
  @TypeormLoader()
  order: Order;
}
