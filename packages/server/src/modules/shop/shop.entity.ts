/* eslint-disable import/no-cycle */
import slugify from 'slugify';
import { Field, ObjectType } from 'type-graphql';
import { TypeormLoader } from 'type-graphql-dataloader';
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from '../core/models/abstract.entity';
import { Order } from '../order/order.entity';
import { Product } from '../product/product.entity';
import { User } from '../user/user.entity';

@ObjectType()
@Entity('shops')
export class Shop extends AbstractEntity {
  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ nullable: true })
  slug: string;

  @Field()
  @Column()
  imageUrl: string;

  @Field()
  @Column()
  address: string;

  @Field()
  @Column()
  zipCode: string;

  @Field()
  @Column()
  city: string;

  @Field(() => [Product], { nullable: true })
  @OneToMany(() => Product, products => products.shop, { nullable: true })
  @TypeormLoader()
  products: Product[];

  @Field(() => User)
  @ManyToOne(() => User, (user: User) => user.shops)
  @TypeormLoader()
  user: User;

  @Field(() => [Order], { nullable: true })
  @OneToMany(() => Order, orders => orders.shop, { nullable: true })
  @TypeormLoader()
  orders: Order[];

  @BeforeInsert()
  @BeforeUpdate()
  slugifyName(): void {
    this.slug = slugify(this.name, { lower: true });
  }
}
