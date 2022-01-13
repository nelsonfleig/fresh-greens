import argon2 from 'argon2';
import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { AbstractService } from '../core/models/abstract.service';
import { UserInput } from './types/user.input';
import { User } from './user.entity';

@Service()
export class UserService extends AbstractService {
  constructor(@InjectRepository(User) protected userRepo: Repository<User>) {
    super(userRepo);
  }

  async create(input: UserInput): Promise<User> {
    const hashedPassword = await argon2.hash(input.password!);
    return super.create({
      ...input,
      password: hashedPassword,
    });
  }
}
