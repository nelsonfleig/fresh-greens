import { Role, User } from '../graphql/__generated__';
import { PageProps } from '../types';

type RolesType = {
  roles: Role[];
};

export const hasPermission = (pageProps: PageProps, user?: RolesType | null) => {
  return (
    !pageProps.protected ||
    (user && pageProps.roles && pageProps.roles.some((role: Role) => user.roles.includes(role)))
  );
};
