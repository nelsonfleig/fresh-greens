import { useMeQuery } from '../graphql/__generated__';

/**
 * helper Hook to simplify the useMeQuery hook and return a boolean if user is authenticated
 */
export const useUser = () => {
  const { data, loading, error } = useMeQuery();

  return {
    user: data?.me,
    isAuthenticated: !!data,
    loading,
    error,
  };
};
