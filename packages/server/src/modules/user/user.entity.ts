import { Field, ObjectType } from 'type-graphql';
import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../core/models/abstract.entity';
import { Roles } from './types/roles.enum';

@ObjectType()
@Entity('users')
export class User extends AbstractEntity {
  @Field()
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Field(() => [Roles])
  @Column('simple-array', { default: Roles.USER })
  roles: Roles[];
}
