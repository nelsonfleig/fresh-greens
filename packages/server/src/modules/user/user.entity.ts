import { Field, ObjectType } from 'type-graphql';
import { TypeormLoader } from 'type-graphql-dataloader';
import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '../core/models/abstract.entity';
// eslint-disable-next-line import/no-cycle
import { Shop } from '../shop/shop.entity';
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

  @Field(() => [Role])
  @Column('simple-array', { default: Role.USER })
  roles: Role[];

  @Field(() => [Shop], { nullable: true })
  @OneToMany(() => Shop, shops => shops.user, { nullable: true })
  @TypeormLoader()
  shops: Shop[];
}
