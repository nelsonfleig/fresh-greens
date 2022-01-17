import slugify from 'slugify';
import { Field, ObjectType } from 'type-graphql';
import { TypeormLoader } from 'type-graphql-dataloader';
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../core/models/abstract.entity';
// eslint-disable-next-line import/no-cycle
import { User } from '../user/user.entity';

@ObjectType()
@Entity('products')
export class Product extends AbstractEntity {
  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ nullable: true })
  slug: string;

  @Field()
  @Column()
  price: number;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  imageUrl: string;

  @Field(() => User)
  @ManyToOne(() => User, (user: User) => user.products)
  @TypeormLoader()
  user: User;

  @BeforeInsert()
  @BeforeUpdate()
  protected slugifyName(): void {
    this.slug = slugify(this.name, { lower: true });
  }
}
