import { Field, ObjectType } from 'type-graphql';
import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../core/models/abstract.entity';

@ObjectType()
@Entity('users')
export class User extends AbstractEntity {
  @Field()
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
