import React from 'react';
import { User } from '../../../graphql/__generated__';

interface Props {
  seller?: Partial<User>;
}

export const SellerProfile = ({ seller }: Props) => {
  return <div>{JSON.stringify(seller)}</div>;
};
