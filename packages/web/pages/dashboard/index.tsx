import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { CenteredLoader } from '../../components';
import { Role, useFindMyShopsQuery } from '../../graphql/__generated__';
import { PageProps } from '../../types';

interface Props {}

const Dashboard = (props: Props) => {
  const { data, loading } = useFindMyShopsQuery();

  if (loading) return <CenteredLoader />;

  return (
    <div>
      {data?.shops.map(shop => (
        <Link href={`/shops/${shop.slug}`}>{shop.name}</Link>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<PageProps, {}> = async context => {
  return {
    props: {
      protected: true,
      roles: [Role.Seller],
    },
  };
};

export default Dashboard;
