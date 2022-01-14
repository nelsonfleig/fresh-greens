import React from 'react';
import { MeQuery, useMeQuery } from '../graphql/__generated__';

export const useUser = () => {
  const { data, loading, error } = useMeQuery();

  return {
    user: data?.me,
    loading,
    error,
  };
};
