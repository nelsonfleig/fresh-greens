/* eslint-disable import/no-cycle */
import { Field, ObjectType } from 'type-graphql';
import { TypeormLoader } from 'type-graphql-dataloader';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from '../core/models/abstract.entity';
import { OrderItem } from '../order-item/order-item.entity';
import { Shop } from '../shop/shop.entity';
import { User } from '../user/user.entity';

@ObjectType()
@Entity('orders')
export class Order extends AbstractEntity {
  @Field()
  @Column()
  address: string;

  @Field()
  @Column()
  zipCode: string;

  @Field()
  @Column()
  city: string;

  @Field()
  @Column()
  total: number;

  @Field(() => User)
  @ManyToOne(() => User, user => user.orders)
  @TypeormLoader()
  user: User;

  @Field(() => Shop)
  @ManyToOne(() => Shop, shop => shop.orders)
  @TypeormLoader()
  shop: Shop;

  @Field(() => [OrderItem])
  @OneToMany(() => OrderItem, orderItems => orderItems.order)
  @TypeormLoader()
  orderItems: OrderItem[];
}
