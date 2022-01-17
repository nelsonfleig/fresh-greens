import { Role } from 'src/modules/user/types/role.enum';

export type UserJwt = {
  id: number;
  roles: Role[];
};
