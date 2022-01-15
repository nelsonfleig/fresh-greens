import { Role } from '../graphql/__generated__';

export type PageProps = {
  protected?: boolean;
  roles?: Role[];
};
