import { Field, ObjectType } from 'type-graphql';
import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../core/models/abstract.entity';
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

  @Field({ nullable: true })
  @Column({ nullable: true })
  sellerName: string;

  @Field(() => [Role])
  @Column('simple-array', { default: Role.USER })
  roles: Role[];
}
