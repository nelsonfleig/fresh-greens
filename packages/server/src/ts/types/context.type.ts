import { Request, Response } from 'express';
import { User } from '../../modules/user/user.entity';

export type Context = {
  req: Request;
  res: Response;
  user: User | null;
};
