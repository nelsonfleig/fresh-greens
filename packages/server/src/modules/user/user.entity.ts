import slugify from 'slugify';
import { Field, ObjectType } from 'type-graphql';
import { TypeormLoader } from 'type-graphql-dataloader';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '../core/models/abstract.entity';
// eslint-disable-next-line import/no-cycle
import { Product } from '../product/product.entity';
import { Role } from './types/role.enum';

@ObjectType()
@Entity('users')
export class User extends AbstractEntity {
  @Field()
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column({ default: false })
  isSeller: boolean;

  @Field({ nullable: true })
  @Column({ nullable: true })
  sellerName: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  sellerNameSlug: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  sellerImageUrl: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  address: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  city: string;

  @Field(() => [Role])
  @Column('simple-array', { default: Role.USER })
  roles: Role[];

  @Field(() => [Product], { nullable: true })
  @OneToMany(() => Product, products => products.user, { nullable: true })
  @TypeormLoader()
  products: Product[];

  @BeforeInsert()
  @BeforeUpdate()
  slugifyName(): void {
    this.sellerNameSlug = slugify(this.sellerName, { lower: true });
  }
}
