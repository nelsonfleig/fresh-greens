import { Request, Response } from 'express';
import { UserJwt } from './user-jwt.type';

export type Context = {
  req: Request;
  res: Response;
  user: UserJwt | null;
};
