import { Role, User } from '../graphql/__generated__';

type RolesType = {
  roles: Role[];
};
type PageProps = RolesType & { protected?: boolean };

export const hasPermission = (pageProps: PageProps, user: RolesType | null | undefined) =>
  (!pageProps.protected && !user) ||
  (user && pageProps.roles && pageProps.roles.some((role: Role) => user.roles.includes(role)));
