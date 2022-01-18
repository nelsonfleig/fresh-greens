import React from 'react';
import { Role } from '../../../graphql/__generated__';
import { useUser } from '../../../hooks/useUser';
import { hasPermission } from '../../../lib/permissionsCheck';

interface Props {
  roles?: Role[];
  children: React.ReactNode;
  ownerId?: string;
}

export const RestrictAccess = ({ ownerId, roles, children }: Props) => {
  const { user, loading } = useUser();

  if (loading) return null;

  return hasPermission(roles, user, ownerId) ? <>{children}</> : null;
};
