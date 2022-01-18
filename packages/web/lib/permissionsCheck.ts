import { Role, User } from '../graphql/__generated__';
import { PageProps } from '../types';

type UserType = {
  id: string;
  roles: Role[];
};

export const hasPagePermission = (pageProps: PageProps, user?: RolesType | null) => {
  return (
    !pageProps.protected ||
    (user && pageProps.roles && pageProps.roles.some((role: Role) => user.roles.includes(role)))
  );
};

export const hasPermission = (roles?: Role[], user?: UserType | null, ownerId?: string) => {
  if (ownerId && ownerId !== user?.id) {
    return false;
  }

  return (
    (!roles && user) || (user && roles && roles.some((role: Role) => user.roles.includes(role)))
  );
};
